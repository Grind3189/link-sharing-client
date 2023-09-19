import logoLg from "../assets/logo-devlinks-large.svg"
import emailIc from "../assets/icon-email.svg"
import passwordIc from "../assets/icon-password.svg"
import InputContainer from "../components/form/inputContainer"
import { Link } from "react-router-dom"

function Register() {
  return (
    <main className="flex h-screen flex-col items-center justify-start p-8 md:justify-center">
      <img src={logoLg} className="mb-4 self-start md:self-center" />
      <form className="w-full p-10 md:w-form md:bg-white">
        <h1 className="text-[24px] font-bold">Create account</h1>
        <p className="mb-10 text-grey-200">
          Let’s get you started sharing your links!
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
          <label htmlFor="password">Create password</label>
          <InputContainer>
            <img src={passwordIc} alt="password icon" />
            <input
              type="password"
              placeholder="At least .8 characters"
              name="password"
              id="password"
              className="w-full bg-transparent outline-none"
              required
            />
          </InputContainer>
        </div>

        <div className="mb-6">
          <label htmlFor="repeatPassword">Confirm password</label>
          <InputContainer>
            <img src={passwordIc} alt="password icon" />
            <input
              type="password"
              placeholder="At least .8 characters"
              name="repeatPassword"
              id="repeatPassword"
              className="w-full bg-transparent outline-none"
              required
            />
          </InputContainer>
        </div>

        <p className="mb-6 text-body_s text-grey-200">
          Password must contain at least 8 characters
        </p>

        <button className="mb-6 h-[46px] w-full rounded-lg bg-purple-300 text-white lg:hover:bg-purple-200 lg:hover:shadow-purple">
          Login
        </button>

        <span className="flex flex-col items-center text-grey-200 lg:flex-row">
          Already have an account?
          <Link to="/login" className="text-purple-300 lg:ml-1">
            Login
          </Link>
        </span>
      </form>
    </main>
  )
}

export default Register
