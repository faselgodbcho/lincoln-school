import { Link } from "react-router-dom";
import BooksImg from "../assets/images/books-img.png";

const Login = () => {
  return (
    <main>
      <section id="login" className="scroll-mt-20 bg-light-bg w-full">
        <div className="text-center md:text-left w-full lg:container mx-auto flex flex-col md:flex-row justify-center gap-8 pt-16 md:pt-32 lg:px-28 px-6">
          <form className="md:w-1/2 pt-8" onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-primary text-5xl font-bold">Login</h1>
            <p className="text-primary font-semibold mt-2 mb-4">
              Login now to unlock your full potential.
            </p>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="border w-full outline-none px-4 py-2 rounded "
              />
              <label htmlFor="email" className="absolute left-[-999999999px]">
                Email
              </label>
            </div>

            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="border mb-4 w-full outline-none px-4 py-2 rounded "
              />
              <label
                htmlFor="password"
                className="absolute left-[-999999999px]"
              >
                Password
              </label>
            </div>

            <div className="text-start mt-4">
              <Link to="/login">
                <button className="btn-primary w-full">Login</button>
              </Link>
            </div>

            <div className="h-px bg-primary w-full flex items-center justify-center mt-4 before:content-['or'] before:bg-light-bg before:px-2"></div>

            <div className="text-start mt-4">
              <Link to="/register">
                <button className="btn-primary w-full">Register</button>
              </Link>
            </div>
          </form>

          <div className=" mx-auto lg:max-w-md md:max-w-lg max-w-96 md:w-1/2">
            <img src={BooksImg} className="w-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
