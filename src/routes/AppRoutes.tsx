import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlankTask } from "../pages/BlankTask/BlankTask";
import { Login } from "../pages/Login/Login";
import { SignUp } from "../pages/SignUp/SignUp";
import { Tasks } from "../pages/Tasks/Tasks";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<BlankTask />} />
          <Route path=":listId" element={<Tasks />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  );
};

export { AppRoutes };
