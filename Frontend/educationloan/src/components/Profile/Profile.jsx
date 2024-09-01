import { useEffect, useState } from "react";
import "./Profile.css";
import HomeIcon from "@mui/icons-material/Home";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = () => {

  const [userdetails, setUserdetails] = useState([]);

  useEffect(() => {
    loaduserdetails();
  }, []);
  const loaduserdetails = async () => {
    const result = await axios.get("http://localhost:8080/user/getAllUsers");
    setUserdetails(result.data);
  }

  return (
    <div className="prf-bdy">
      <div className="prf-nav">
        <Link className="n-link" to="/">
          <button>
            <span>
              <HomeIcon />
            </span>
            <span>Home</span>
          </button>
        </Link>
      </div>
      <div className="prf-table1">
        <div className="prf-table">
          <table>
            <tbody>
              <tr>
                <td className="prf-head" colSpan="10">Loan Details</td>
              </tr>
              <tr>
                <th>S No</th>
                <th>Email</th>
                <th>Password</th>
                <th>Username</th>
                <th>Mobile Number</th>
                <th>User Role</th>
              </tr>
              {
                userdetails && userdetails.map((userdetail, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{userdetail.email}</td>
                    <td>{userdetail.password}</td>
                    <td>{userdetail.username}</td>
                    <td>{userdetail.mobilenumber}</td>
                    <td>{userdetail.userrole}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Profile;