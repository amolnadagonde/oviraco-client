import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import DashBoard from "./pages/protected/DashBoard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
