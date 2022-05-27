import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { SignUp } from "../pages/SignUp/SignUp";
import { Tasks } from "../pages/Tasks/Tasks";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Tasks />} />
      </Routes>
    </Router>
  );
};

export { AppRoutes };
