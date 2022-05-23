import {   BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<div>Tela de Login</div>}/>
        <Route path="/" element={<div>Tela de tarefas</div>}/>
      </Routes>
    </Router>
  );
};

export { AppRoutes };
