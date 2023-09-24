import logoLg from "../assets/logo-devlinks-large.svg";
import emailIc from "../assets/icon-email.svg";
import passwordIc from "../assets/icon-password.svg";
import InputContainer from "../components/form/InputContainer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getApiUrl } from "../util";

interface LoginDataState {
  email: string;
  password: string;
}

interface ErrorState {
  email: string;
  password: string;
  general: string;
}

function Login() {
  const url = getApiUrl();
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<LoginDataState>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<ErrorState>({
    email: "",
    password: "",
    general: "",
  });

  const handleDismissError = () => {
    setError({
      email: "",
      password: "",
      general: "",
    });
  };

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDismissError();
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`${url}/api/login`, {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        if (res.status === 404) {
          setError((prev) => ({ ...prev, email: "User not found" }));
        }
        if (res.status === 401) {
          setError((prev) => ({ ...prev, password: "Invalid password" }));
        } else {
          throw new Error("Something went wrong try again later");
        }
        return;
      }
      await res.json();
      navigate("/");
    } catch (err: any) {
      setError((prev) => ({ ...prev, general: err.message }));
    }
  };

  return (
    <main className="flex h-screen flex-col items-center justify-start p-8 md:justify-center">
      <img src={logoLg} className="mb-4 self-start md:self-center" />
      <form
        className="w-full rounded-lg p-10 md:w-form md:bg-white"
        onSubmit={handleSubmit}
      >
        <h1 className="text-[24px] font-bold">Login</h1>
        <p className="mb-10 text-grey-200">
          Add your details below to get back into the app
        </p>

        <div className="mb-6">
          <div className="flex items-center justify-between">
            <label htmlFor="email">Email Address</label>
            <span className="text-body_s text-red">{error.email}</span>
          </div>
          <InputContainer hasError={error.email ? true : false}>
            <img src={emailIc} alt="email icon" />
            <input
              type="email"
              placeholder="e.g. alex@email.com"
              name="email"
              id="email"
              className="w-full bg-transparent outline-none"
              onChange={handleChangeData}
              value={loginData.email}
              required
            />
          </InputContainer>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between">
            <label htmlFor="password">Password</label>
            <span className="text-body_s text-red">{error.password}</span>
          </div>
          <InputContainer hasError={error.password ? true : false}>
            <img src={passwordIc} alt="password icon" />
            <input
              type="password"
              placeholder="Enter yourpassword"
              name="password"
              id="password"
              className="w-full bg-transparent outline-none"
              onChange={handleChangeData}
              value={loginData.password}
              required
            />
          </InputContainer>
        </div>

        {error.general && <h3 className="text-body_m text-red mb-3" >{error.general}</h3>}
        <button className="mb-6 h-[46px] w-full rounded-lg bg-purple-300 text-white lg:hover:bg-purple-200 lg:hover:shadow-purple">
          Login
        </button>

        <span className="flex flex-col items-center text-grey-200 lg:flex-row">
          Don't have an account?
          <Link to="/register" className="text-purple-300 lg:ml-1">
            Create account
          </Link>
        </span>
      </form>
    </main>
  );
}

export default Login;
