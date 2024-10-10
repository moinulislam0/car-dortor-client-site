import { Link } from "react-router-dom";
import logIn from "../../assets/logIn.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const SignUP = (props) => {
  const { createUser } = useContext(AuthContext);
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;
    console.log(email,name, password, confirm_password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("User created:", user);
      })
      .catch((error =>console.log(error)));
  };
  return (
    <div className="hero p-4  ">
      <div className="w-[600px] p-10 ">
        
        <div className="  shrink-0 shadow-2xl rounded-xl">
          <form onSubmit={handleLogIn} className="card-body">
            <h1 className="text-3xl text-red-600 text-center">SignUp</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="Name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="confirm_password"
                placeholder="confirm password"
                className="input input-bordered"
                required
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control ">
              <input className="btn btn-primary" type="submit" value="SignUp" />
            </div>
          </form>
          <p className="text-center p-4">
            Already Have an account ?{" "}
            <Link className="text-orange-800 font-bold" to="/login">
              LogIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
