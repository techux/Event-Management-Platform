import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl text-center">
        <Link
          to="/"
          className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            src="https://www.svgrepo.com/show/446855/event.svg"
            className="h-8"
            alt="Event Management logo"
          />
          EventHub
        </Link>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, cupiditate eveniet recusandae consectetur accusamus, esse quam cum eos laborum eius ad, qui fugiat dolore distinctio sunt! Eius, sit! Aliquid, obcaecati?.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
          <li>
            <Link to="/" className="mr-4 hover:underline md:mr-6 ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="mr-4 hover:underline md:mr-6">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/tos" className="mr-4 hover:underline md:mr-6">
              Terms and Conditions
            </Link>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          &copy; 2025
          <Link to="/" className="hover:underline">
            &nbsp; EventHub
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
