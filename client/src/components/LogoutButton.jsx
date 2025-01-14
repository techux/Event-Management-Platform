import React from "react";
import { useNavigate } from "react-router-dom"; 

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      navigate("/login"); 
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">
      Logout
    </button>
  );
};

export default Logout;
