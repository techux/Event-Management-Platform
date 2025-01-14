import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ContinueAsGuest = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/auth/guest-login`
      );

      if (response.status === 201 && response.data.status === "ok" && response.data.token) {
        Cookies.set("token", response.data.token, { expires: 1 });
        console.log("Login as guest success");
        navigate("/dashboard");
      } else {
        console.log("spme error");
        setError(response.data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(error.response.data.message || "Unable to login, please try again later.");
        setError(error.response.data.message || "Unable to login, please try again later.");
      } else {
        setError("Unable to login, please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleSubmit}
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        disabled={loading}
      >
        {loading ? "Logging in as Guest..." : "Continue as Guest"}
      </button>

      {error && (
        <div className="text-red-500 text-sm mt-2">
          <p>{error}</p>
        </div>
      )}
    </>
  );
};

export default ContinueAsGuest;
