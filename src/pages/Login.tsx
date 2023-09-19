import logoLg from "../assets/logo-devlinks-large.svg"
import emailIc from "../assets/icon-email.svg"
import passwordIc from "../assets/icon-password.svg"
import InputContainer from "../components/form/inputContainer"
import { Link } from "react-router-dom"

function Login() {
  return (
    <main className="flex h-screen flex-col items-center justify-start p-8 md:justify-center">
      <img src={logoLg} className="mb-4 self-start md:self-center" />
      <form className="w-full rounded-lg p-10 md:w-form md:bg-white">
        <h1 className="text-[24px] font-bold">Login</h1>
        <p className="mb-10 text-grey-200">
          Add your details below to get back into the app
        </p>

        <div className="mb-6">
          <label htmlFor="email">Email Address</label>
          <InputContainer>
            <img src={emailIc} alt="email icon" />
            <input
              type="email"
              placeholder="e.g. alex@email.com"
              name="email"
              id="email"
              className="w-full bg-transparent outline-none"
              required
            />
          </InputContainer>
        </div>

        <div className="mb-6">
          <label htmlFor="password">Password</label>
          <InputContainer>
            <img src={passwordIc} alt="password icon" />
            <input
              type="password"
              placeholder="Enter yourpassword"
              name="password"
              id="password"
              className="w-full bg-transparent outline-none"
              required
            />
          </InputContainer>
        </div>

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
  )
}

export default Login
