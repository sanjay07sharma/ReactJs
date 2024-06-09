import { useState } from "react"

const Login = () => {
  const [signIn, setSignIn] = useState("Login");
  const toggleSignIn = (e) => {
    e.preventDefault();
    signIn === "Login" ? setSignIn("Sign Up") : setSignIn("Login");
    document.getElementById("name").classList.toggle("hidden");
  }
  return (
    <div>
        <form className="w-3/12 absolute bg-orange-100 my-52 mx-auto p-14 left-0 right-0 bg-opacity-80">
          <h1 className="text-2xl font-bold text-black mb-4">{signIn}</h1>
          <div className="text-black flex flex-wrap cursor-pointer">
            <p>Or &nbsp;</p>
            <p
              className="text-blue-500 hover:text-blue-700"
              onClick={(e) => toggleSignIn(e)}
              >
                {signIn === "Login" ? "Create an account" : "Log in to you account "}
              {/* {signIn === "Login" ? "Sign up Now " : "Login"} */}
            </p>
          </div>
          <input
              type="Text"
              id="name"
              placeholder="Name"
              className="shadow appearance-none border rounded w-full p-4 my-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hidden"
          />
          <input
              type="email"
              id="email"
              placeholder="Email or Phone number"
              className="shadow appearance-none border rounded w-full p-4 my-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
              type="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full p-4 my-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="bg-orange-400 w-full hover:bg-orange-600 text-white font-bold p-4 my-6 rounded focus:outline-none focus-shadow-outline"
          >
            {signIn}
          </button>
        </form>
    </div>
  )
}

export default Login
