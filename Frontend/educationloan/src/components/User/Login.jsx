import "./Userstyle.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const { email, password } = user
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [msg, setMsg] = useState("");

  const [typelgn, setTypelgn] = useState("password");
  const [iconlgn, setIconlgn] = useState(<VisibilityOffIcon />);

  const handleTogglelgn = () => {
    if (typelgn === "password") {
      setIconlgn(<VisibilityIcon />);
      setTypelgn("text");
    } else {
      setIconlgn(<VisibilityOffIcon />);
      setTypelgn("password");
    }
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await axios.post("http://localhost:8080/user/login", user);
    if (result.data === "Login Successful")
      navigate("/");
    else
      setMsg(result.data);
  };

  return (
    <div className="user-container">
      <div className="n-nav">
        <Link className="n-link" to="/">
          <button>
            <span>
              <HomeIcon />
            </span>
            <span>Home</span>
          </button>
        </Link>
      </div>
      <div className="user-cont">
        <form className="user-form" onSubmit={(e) => handleSubmit(e)}>
          <p className="u-name">Login</p>
          <div className="screen">{msg}</div>
          <div className="u-input">
            <span>
              <label htmlFor="email">Email</label>
            </span>
            <span className="u-icon">
              <EmailIcon />
            </span>
            <br></br>
            <input type="email" id="email" name="email" value={email} onChange={(e) => onInputChange(e)} required></input>
            <div className="screen1" id="screen1"></div>
          </div>
          <div className="u-input">
            <span>
              <label htmlFor="password">Password</label>
            </span>
            <span className="u-icon u-eyeicon" onClick={handleTogglelgn}>
              {iconlgn}
            </span>
            <br></br>
            <input type={typelgn} id="password" name="password" value={password} onChange={(e) => onInputChange(e)} required></input>
            <div className="screen2"></div>
          </div>
          <div className="u-btn1">
            <button type="submit" className="u-btn">
              login
            </button>
          </div>
          <div className="u-link1">
            <span className="u-font2">Don't have an account? </span>
            <span>
              <Link to="/user/signup" className="u-font1">
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
