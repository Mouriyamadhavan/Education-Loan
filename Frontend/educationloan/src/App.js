import { Route, Routes } from "react-router-dom";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import Admin from "./components/Admin/Admin";
import Profile from "./components/Profile/Profile";
import Viewloan from "./components/Viewloan/Viewloan";
import Home from "./components/Home/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user/login" element={<Login />}></Route>
      <Route path="/user/signup" element={<Signup />}></Route>
      <Route path="/admin/getAllLoans" element={<Admin />}></Route>
      <Route path="/user/getProfile" element={<Profile />}></Route>
      <Route path="/user/viewLoan/:user" element={<Viewloan />}></Route>
    </Routes>
  );
}

export default App;
