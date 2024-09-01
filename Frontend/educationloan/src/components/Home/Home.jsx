import { Link } from "react-router-dom";
import "./Home.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DataObjectIcon from '@mui/icons-material/DataObject';
import LoginIcon from '@mui/icons-material/Login';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ViewListIcon from '@mui/icons-material/ViewList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Home = () => {
  return (
    <div className="hm-1">
      <div className="hm">
        <div className="hm-intro">Education Loan Portal</div>
      </div>
      <div className="hm-body1">
        <Link to="/user/login">
          <div className="hm-bd1 hm-bd" title="login">
            <LoginIcon className="h-icon " sx={{ fontSize: 32 }} />
            <p>Login</p>
          </div>
        </Link>
        <Link to="/user/signup">
          <div className="hm-bd2 hm-bd" title="signup">
          <AddCircleIcon className="h-icon " sx={{ fontSize: 32 }} />
            <p>Sign up</p>
          </div>
        </Link>
        <Link to="/user/getProfile">
          <div className="hm-bd2 hm-bd" title="view profile">
          <AccountCircleIcon className="h-icon " sx={{ fontSize: 32 }} />
            <p>View Profile</p>
          </div>
        </Link>
        <Link to="/user/viewLoan/1">
          <div className="hm-bd2 hm-bd" title="view loan">
          <SummarizeIcon className="h-icon " sx={{ fontSize: 32 }} />
            <p>View Loan</p>
          </div>
        </Link>
        <Link to="/admin/getAllLoans">
          <div className="hm-bd2 hm-bd" title="view all loans">
          <ViewListIcon className="h-icon " sx={{ fontSize: 32 }} />
            <p>View All Loans</p>
          </div>
        </Link>
        <a href="http://localhost:8080/swagger-ui/index.html#/" target="_blank" rel="noopener noreferrer">
          <div className="hm-bd2 hm-bd" title="swagger">
          <DataObjectIcon className="h-icon " sx={{ fontSize: 32 }} />
            <p>Swaggor</p>
          </div>
        </a>
      </div>
      <div className="footer-cont1">
        <div className="footer-cont">
          <div className="f-social">
            <a href="" className="instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="f-icon " sx={{ fontSize: 32 }} />
            </a>
            <a href="" className="twitter" title="Twitter" target="_blank" rel="noopener noreferrer">
              <TwitterIcon className="f-icon " sx={{ fontSize: 32 }} />
            </a>
            <a href="" className="linkedin" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="f-icon " sx={{ fontSize: 32 }} />
            </a>
            <a href="" className="github" title="Github" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="f-icon " sx={{ fontSize: 32 }} />
            </a>
            <a href="mailto:" className="mail" title="Mail" rel="noopener noreferrer">
              <MailOutlineIcon className="f-icon " sx={{ fontSize: 32 }} />
            </a>
          </div>
          <div className="copy-txt">©Copyright All rights reserved</div>
        </div>
      </div>
    </div >
  )
}

export default Home;