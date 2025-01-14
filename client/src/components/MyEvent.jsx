import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Get the token from cookies
        const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('token='))
          ?.split('=')[1];
  
        // If there's no token, you can handle it here (e.g., redirect to login)
        if (!token) {
          throw new Error('No token found');
        }
  
        // Fetch events with token in Authorization header
        const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/events/my`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // Pass token in the header
          },
          credentials: "include", // This ensures cookies are sent along with the request
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
  
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchEvents();
  }, []);
  
  

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-12">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          My Joined Events
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
          Checkout the events you joined!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
