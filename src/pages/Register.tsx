import logoLg from "../assets/logo-devlinks-large.svg";
import emailIc from "../assets/icon-email.svg";
import passwordIc from "../assets/icon-password.svg";
import InputContainer from "../components/form/InputContainer";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState, useContext } from "react";
import { getApiUrl } from "../util";
import { AuthContext } from "../context/AuthContextProvider";
import Loading from "../components/Loading";

interface RegisterDataState {
  email: string;
  password: string;
  repeatPassword: string;
}
interface ErrorState {
  email: string;
  password: string;
  general: string;
}

function Register() {
  const {setIsAuth} = useContext(AuthContext)
  const url = getApiUrl();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams()
  const params = searchParams.get("redirectTo")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [registerData, setRegisterData] = useState<RegisterDataState>({
    email: "",
    password: "",
    repeatPassword: "",
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
    setRegisterData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)
    setIsAuth(false)

    if (registerData.password !== registerData.repeatPassword) {
      setIsLoading(false)
      return setError((prev) => ({
        ...prev,
        password: "Invalid password",
      }));
    }
    try {
      const res = await fetch(`${url}/api/register`, {
        method: "POST",
        body: JSON.stringify(registerData),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include"
      });

      if (!res.ok) {
        if (res.status === 401) {
          setError((prev) => ({ ...prev, email: "Email already exists" }));
        }
        if (res.status === 400) {
          setError((prev) => ({ ...prev, password: "Invalid password" }));
        }
        setIsLoading(false)
        return;
      }
      const {userId} = await res.json();
      setIsLoading(false)
      localStorage.setItem('userId', userId)
      setIsAuth(true)
      navigate(params ? params : "", {replace: true});
    } catch (err: any) {
      setIsLoading(false)
      setError((prev) => ({ ...prev, general: err.message }));
    }
  };

  return (
    <main className="flex h-screen flex-col items-center justify-start p-8 md:justify-center">
      <img src={logoLg} className="mb-4 self-start md:self-center" />
      <form
        className="w-full p-10 md:w-form md:bg-white"
        onSubmit={handleSubmit}
      >
        <h1 className="text-[24px] font-bold">Create account</h1>
        <p className="mb-10 text-grey-200">
          Let’s get you started sharing your links!
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
              value={registerData.email}
              required
            />
          </InputContainer>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between">
            <label htmlFor="password">Create Password</label>
            <span className="text-body_s text-red">{error.password}</span>
          </div>
          <InputContainer hasError={error.password ? true : false}>
            <img src={passwordIc} alt="password icon" />
            <input
              type="password"
              placeholder="At least .8 characters"
              name="password"
              id="password"
              className="w-full bg-transparent outline-none"
              onChange={handleChangeData}
              value={registerData.password}
              required
            />
          </InputContainer>
        </div>

        <div className="mb-6">
          <label htmlFor="repeatPassword">Confirm Password</label>
          <InputContainer hasError={error.password ? true : false}>
            <img src={passwordIc} alt="password icon" />
            <input
              type="password"
              placeholder="At least .8 characters"
              name="repeatPassword"
              id="repeatPassword"
              className="w-full bg-transparent outline-none"
              onChange={handleChangeData}
              value={registerData.repeatPassword}
              required
            />
          </InputContainer>
        </div>
        {error.general && <h3 className="mb-3 text-body_m text-red">{error.general}</h3>}
        <button className="mb-6 h-[46px] w-full rounded-lg grid place-items-center bg-purple-300 text-white lg:hover:bg-purple-200 lg:hover:shadow-purple">
          {isLoading ? <Loading /> : "Register"}
        </button>

        <span className="flex flex-col items-center text-grey-200 lg:flex-row">
          Already have an account?
          <Link to="/login" className="text-purple-300 lg:ml-1">
            Login
          </Link>
        </span>
      </form>
    </main>
  );
}

export default Register;
