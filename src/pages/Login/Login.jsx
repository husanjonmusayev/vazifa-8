import "./login.css";
import { validateLogin, ClearLogin } from "../../Functions/Functions";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Login() {
  const username = useRef();
  const password = useRef();
  const [localuser, setLocaluser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const navigate = useNavigate();

  useEffect(() => {
    setLocaluser(JSON.parse(localStorage.getItem("user")));
  }, []);

  function hendalSubmit(e) {
    e.preventDefault();

    if (validateLogin(username, password)) {
      let user = {
        username: username.current.value,
        password: password.current.value,
      };

      if (
        localuser.username === user.username &&
        localuser.password === user.password
      ) {
        navigate("/");
      } else {
        alert("Foydalanuvchi mavjud emas");
      }
    }

    ClearLogin(username, password);
  }

  return (
    <div className="forma">
      <div className="logo">
        <img src="logo.png" alt="logo icon" />
      </div>
      <div className="form-Login">
        <h2>Login</h2>
        <form onSubmit={hendalSubmit}>
          <input ref={username} type="text" placeholder="Username" />
          <input ref={password} type="password" placeholder="Password" />
          <button>Login to your account</button>
        </form>
        <div className="col">
          <p>Don’t have an account?</p>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
