import logoLg from "../assets/logo-devlinks-large.svg";
import emailIc from "../assets/icon-email.svg";
import passwordIc from "../assets/icon-password.svg";
import InputContainer from "../components/form/InputContainer";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useState, useContext } from "react";
import { getApiUrl } from "../util";
import { AuthContext } from "../context/AuthContextProvider";
import Loading from "../components/Loading";

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
  const location = useLocation().state;
  const [searchParams] = useSearchParams();
  const params = searchParams.get("redirectTo");
  const { setIsAuth, isCheckingAuth } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [loginData, setLoginData] = useState<LoginDataState>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<ErrorState>({
    email: "",
    password: "",
    general: location ? location.error : "",
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
    setIsLoading(true);
    setIsAuth(false);
    try {
      const res = await fetch(`${url}/api/login`, {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
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
        return setIsLoading(false);
      }
      const { userId } = await res.json();
      setIsLoading(false);
      localStorage.setItem("userId", userId);
      setIsAuth(true);
      navigate(params ? params : "/", { replace: true });
    } catch (err: any) {
      setIsLoading(false);
      setError((prev) => ({ ...prev, general: err.message }));
    }
  };

  return (
    <main className="flex h-screen flex-col items-center justify-start p-8 md:justify-center">
      <img src={logoLg} className="mb-[71px] self-start md:self-center" />
      <form
        className="w-full rounded-lg md:p-10 md:w-form md:min-h-[482px] md:bg-white"
        onSubmit={handleSubmit}
      >
       {!isCheckingAuth ? <>
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
                placeholder="e.g. grind@email.com"
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
                placeholder="Enter your password"
                name="password"
                id="password"
                className="w-full bg-transparent outline-none"
                onChange={handleChangeData}
                value={loginData.password}
                required
              />
            </InputContainer>
          </div>

          {error.general && (
            <h3 className="mb-3 text-body_m text-red">{error.general}</h3>
          )}
          <button className="mb-6 grid h-[46px] w-full place-items-center rounded-lg bg-purple-300 text-white lg:hover:bg-purple-200 lg:hover:shadow-purple">
            {isLoading ? <Loading /> : "Login"}
          </button>

          <span className="flex flex-col items-center text-grey-200 lg:flex-row">
            Don't have an account?
            <Link
              to={params ? `/register?redirectTo=${params}` : '/register'}
              className="text-purple-300 lg:ml-1"
            >
              Create account
            </Link>
          </span>
        </> : <h1 className="font-bold text-2xl">Loading...</h1>}
      </form>
    </main>
  );
}

export default Login;
