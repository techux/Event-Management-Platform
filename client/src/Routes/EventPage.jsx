import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventPage = () => {
  const { slug } = useParams(); // Extract slug from the URL
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_API}/events/${slug}`
        );
        setEventData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching event details");
        setLoading(false);
      }
    };

    fetchEventData();
  }, [slug]); // Fetch data when slug changes

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Loading event details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-500 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl ">
        <div className="max-w-screen-md mx-auto">
          {/* Event Title */}
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            {eventData?.name}
          </h1>

          <img
  src={eventData?.image}
  alt={eventData?.name}
  className="object-cover h-96 w-full rounded-lg mt-4"
/>

          {/* Event Description */}
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            {eventData?.description}
          </p>

          {/* Event Details */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Event Details
              </h3>
              <div className="mt-4">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Date: </strong> {eventData?.date}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Location: </strong> {eventData?.location}
                </p>
                {/* <p className="text-gray-600 dark:text-gray-300">
                  <strong>Organizer: </strong> {eventData?.organizer}
                </p> */}
              </div>
            </div>

            {/* Registration Button */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Register Now
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Don’t miss out on this amazing event. Click below to register!
              </p>
              <button className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventPage;
