import "./Userstyle.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from '@mui/icons-material/Phone';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";

const Signup = () => {

  const [user, setUser] = useState({
    email: "",
    username: "",
    mobilenumber: "",
    password: ""
  })
  const { email, username, mobilenumber, password } = user
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [typesgn1, setTypesgn1] = useState("password");
  const [iconsgn1, setIconsgn1] = useState(<VisibilityOffIcon />);

  const handleTogglesgn1 = () => {
    if (typesgn1 === "password") {
      setIconsgn1(<VisibilityIcon />);
      setTypesgn1("text");
    } else {
      setIconsgn1(<VisibilityOffIcon />);
      setTypesgn1("password");
    }
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user/signup", user)
    navigate("/");
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
          <p className="u-name">Create Account</p>
          <div className="u-input">
            <span>
              <label htmlFor="email">Email</label>
            </span>
            <span className="u-icon">
              <EmailIcon />
            </span>
            <br></br>
            <input type="email" id="email" name="email" value={email} onChange={(e) => onInputChange(e)} required></input>
            <div className="screen2"></div>
          </div>
          <div className="u-input">
            <span>
              <label htmlFor="username">Username</label>
            </span>
            <span className="u-icon">
              <PersonIcon />
            </span>
            <br></br>
            <input type="text" id="username" name="username" value={username} onChange={(e) => onInputChange(e)} required></input>
            <div className="screen1"></div>
          </div>
          <div className="u-input">
            <span>
              <label htmlFor="mobileno">Mobile No</label>
            </span>
            <span className="u-icon">
              <PhoneIcon />
            </span>
            <br></br>
            <input type="text" id="mobileno" name="mobilenumber" value={mobilenumber} onChange={(e) => onInputChange(e)} required></input>
            <div className="screen1"></div>
          </div>
          <div className="u-input">
            <span>
              <label htmlFor="password">Password</label>
            </span>
            <span className="u-icon u-eyeicon" onClick={handleTogglesgn1}>
              {iconsgn1}
            </span>
            <br></br>
            <input type={typesgn1} id="password" name="password" value={password} onChange={(e) => onInputChange(e)} required></input>
            <div className="screen3"></div>
          </div>
          <div className="u-btn1">
            <button type="submit" className="u-btn">
              Sign up
            </button>
          </div>
          <div className="u-link1">
            <span className="u-font2">Already have an account? </span>
            <span>
              <Link to="/user/login" className="u-font1">
                login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
