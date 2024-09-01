import { useEffect, useState } from "react";
import "./Admin.css";
import HomeIcon from "@mui/icons-material/Home";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {

  const [loandetails, setLoandetails] = useState([]);

  useEffect(() => {
    loadLoanDetails();
  }, []);
  const loadLoanDetails = async () => {
    const result = await axios.get("http://localhost:8080/admin/getAllLoans");
    setLoandetails(result.data);
  }

  return (
    <div className="adm-bdy">
      <div className="adm-nav">
        <Link className="n-link" to="/">
          <button>
            <span>
              <HomeIcon />
            </span>
            <span>Home</span>
          </button>
        </Link>
      </div>
      <div className="adm-table1">
        <div className="adm-table">
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
                loandetails && loandetails.map((loandetail, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
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
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Admin;