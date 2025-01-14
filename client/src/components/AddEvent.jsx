import React, { useState } from "react";
import axios from "axios" ;
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

const AddEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
    datetime: "",
    category: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, image, datetime, category, location } = formData;

    if (!name || !description || !image || !datetime || !category || !location) {
      alert("Please fill all the required fields");
      return;
    }

    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("image", image);
    data.append("datetime", datetime);
    data.append("category", category);
    data.append("location", location);

    try {
      const token = Cookies.get('token'); 
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API}/events`,
        data, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    
      const result = response.data;

      if (response.status === 400) {
        alert(result.message);
      } else if (response.status === 201) {
        alert("Event created successfully!");
        setFormData({
          name: "",
          description: "",
          image: null,
          datetime: "",
          category: "",
          location: "",
        });
        // window.location.reload();
      } else {
        alert(result.message || "An unexpected error occurred");
      }
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Unable to create new event");
    }
  };

  // check for Guest user
  const token = Cookies.get('token') ;
  const user = jwtDecode(token).role ;
  if (user === 'guest') {
    return <section className="bg-white dark:bg-gray-900 py-12" id="addEvent">
      <div className="flex flex-col items-center justify-center"> 
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Add New Event
      </h2>
        <span className="text-red-600 text-2xl text-center">You logged in as a guest user.<br/>Please login with email to add an event</span> 
        </div>;
    </section>
  }

  return (
    <section className="bg-white dark:bg-gray-900 py-12" id="addEvent">
    <div className="flex flex-col items-center justify-center m-5">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Add New Event
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white rounded-lg shadow p-6 dark:bg-gray-800">
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Event Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Name of event"
              required
            />
          </div>
          <div>
            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Where does this event happen? Online/Venue"
              required
            />
          </div>
          <div>
            <label htmlFor="datetime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Date and Time
            </label>
            <input
              type="datetime-local"
              name="datetime"
              id="datetime"
              value={formData.datetime}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Event Cover
            </label>
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              onChange={handleFileChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Category
            </label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            >
              <option value="">Select category</option>
              <option value="entertainment">Entertainment</option>
              <option value="hackathons">Hackathons</option>
              <option value="webinars">Webinars</option>
              <option value="workshop">Workshops</option>
              <option value="virtual">Virtual</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Write a description about the event..."
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Add Event
        </button>
      </form>
    </div>
    </section>
  );
};

export default AddEvent;
