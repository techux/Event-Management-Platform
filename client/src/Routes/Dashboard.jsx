import React from "react";
import Logout from "../components/LogoutButton";
import AddEvent from "../components/AddEvent";
import MyEvent from "../components/MyCreatedEvent";
import Events from "./Events";
import { Link } from "react-router-dom";

const dashboard = () => {
  return (
    <div>
      <div className="bg-white dark:bg-gray-900 flex justify-center pt-5 gap-5 ">
        <Link
          to={"/myevents"}
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          My Created Events
        </Link>
        <Link
          to={"/joined"}
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          My Joined Events
        </Link>
      </div>
      <AddEvent />
    </div>
  );
};

export default dashboard;
