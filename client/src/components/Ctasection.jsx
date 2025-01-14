import React from "react";
import ContinueAsGuest from "./ContinueAsGuest"

const Ctasection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Want to Explore the platform ?
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Don't have time for register ? explore platform as a Guest User, no details required...
          </p>
          <ContinueAsGuest/>
          {/* <button
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Continue as Guest
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Ctasection;
