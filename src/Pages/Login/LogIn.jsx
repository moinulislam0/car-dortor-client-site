import { Link, useLocation, useNavigate } from "react-router-dom";
import logIn from "../../assets/logIn.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
const LogIN = (props) => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };
        //  navigate(location?.state ? location?.state : '/');
        // get access token
        axios
          .post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
              navigate(location?.state ? location?.state : "/");
            }
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero p-4  ">
      <div className="w-[600px] p-10 ">
        <div className="  shrink-0 shadow-2xl rounded-xl">
          <form onSubmit={handleLogIn} className="card-body">
            <h1 className="text-3xl text-red-600 text-center">Login</h1>
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <input className="btn btn-primary" type="submit" value="login" />
            </div>
          </form>
          <p className="text-center p-4">
            New to Car Doctors ?{" "}
            <Link className="text-orange-800 font-bold" to="/signup">
              SingUP
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIN;
