import "./Viewloan.css";
import { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const Viewloan = () => {

  const [loandetail, setLoandetail] = useState([]);
  const { user } = useParams();

  useEffect(() => {
    loadLoanDetail();
  }, []);


  const [first, setfirst] = useState("5");
  const loadLoanDetail = async () => {
    var ax = "http://localhost:8080/user/viewLoan/";
    const result = await axios.get(ax + `${user}`);
    setLoandetail(result.data);
  }
  return (
    <div className="vloan-bdy">
      <div className="vloan-nav">
        <Link className="n-link" to="/">
          <button>
            <span>
              <HomeIcon />
            </span>
            <span>Home</span>
          </button>
        </Link>
      </div>
      <div className="vloan-table1">
        <div className="vloan-table">
          <table>
            <tbody>
              <tr>
                <td className="m-head" colSpan="10">Loan Details</td>
              </tr>
              <tr>
                <th>S No</th>
                <th>Applicant Name</th>
                <th>Applicant Address</th>
                <th>Applicant Mobile</th>
                <th>Applicant Email</th>
                <th>Applicant Aadhaar</th>
                <th>Applicant Pan</th>
                <th>Applicant Salary</th>
                <th>Loan Amount Required</th>
                <th>Loan Repayment Months</th>
              </tr>
              {
                <tr>
                  <td>1</td>
                  <td>{loandetail.applicantname}</td>
                  <td>{loandetail.applicantaddress}</td>
                  <td>{loandetail.applicantmobile}</td>
                  <td>{loandetail.applicantemail}</td>
                  <td>{loandetail.applicantaadhaar}</td>
                  <td>{loandetail.applicantpan}</td>
                  <td>{loandetail.applicantsalary}</td>
                  <td>{loandetail.loanamountrequired}</td>
                  <td>{loandetail.loanrepaymentmonths}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Viewloan;