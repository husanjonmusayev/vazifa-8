import { Link, useNavigate } from "react-router-dom";
import { validate, Clear } from "../../Functions/Functions";
import { useRef } from "react";
import "./register.css";

function Register() {
  const navigate = useNavigate();
  const username = useRef();
  const email = useRef();
  const password = useRef();

  function hendalSubmit(e) {
    e.preventDefault();

    if (validate(username, email, password)) {
      let user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      localStorage.setItem("user", JSON.stringify(user));
      navigate("/login");
    }

    Clear(username, email, password);
  }

  return (
    <div className="forma">
      <div className="logo">
        <img src="logo.png" alt="logo icon" />
      </div>
      <div className="form-Login">
        <h2>Sign Up</h2>
        <form onSubmit={hendalSubmit}>
          <input ref={username} type="text" placeholder=" Username" />
          <input ref={email} type="email" placeholder="Email" />
          <input ref={password} type="password" placeholder="Password" />

          <button>Create an account</button>
        </form>
        <div className="col">
          <p>Don’t have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
