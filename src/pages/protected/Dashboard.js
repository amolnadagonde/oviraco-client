import React from "react";
import { useAuth } from "../../context/AuthContext";

const DashBoard = () => {
  const { logOut } = useAuth();

  const handleLogout = () => {
    logOut();
  };

  return (
    <div>
      DashBoard Page
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default DashBoard;
