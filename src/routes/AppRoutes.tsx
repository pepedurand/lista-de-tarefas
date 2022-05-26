import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { SignUp } from "../pages/SignUp/SignUp";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<div>Tela de tarefas</div>} />
      </Routes>
    </Router>
  );
};

export { AppRoutes };
