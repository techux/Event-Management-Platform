import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = Cookies.get("token");

        if (!token) {
          setError("Authorization token is missing.");
          return;
        }
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_API}/account`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileData(response.data);
      } catch (err) {
        setError("Failed to fetch profile data. Please try again later.");
      }
    };

    fetchProfile();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-12 ">
    <div className="max-w-screen-md mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8 dark:text-gray-300">Profile</h1>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : !profileData ? (
        <div className="flex justify-center">
          <div className="loader"></div> {/* Add a loader if needed */}
          <p className="text-gray-600">Loading...</p>
        </div>
      ) : (
        <div className="border rounded-lg p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg">
          <h2 className="text-xl font-semibold mb-6 text-center text-blue-600 dark:text-blue-400">
            Account Details
          </h2>
          <div className="grid grid-cols-2 gap-y-4">
            <div className="font-medium text-gray-600 dark:text-gray-300">Name:</div>
            <div className="text-gray-800 dark:text-white">{profileData.name}</div>
  
            <div className="font-medium text-gray-600 dark:text-gray-300">Username:</div>
            <div className="text-gray-800 dark:text-white">{profileData.username}</div>
  
            <div className="font-medium text-gray-600 dark:text-gray-300">Email:</div>
            <div className="text-gray-800 dark:text-white">{profileData.email}</div>
  
            <div className="font-medium text-gray-600 dark:text-gray-300">Account Created:</div>
            <div className="text-gray-800 dark:text-white">
              {new Date(profileData.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      )}
    </div>
    </section>
  );
  
};

export default Profile;
