import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <img
        src={event.image || 'https://i.ibb.co/fYk35J5/default-events.jpg'}
        alt={event.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          {event.name}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          {event.description.substring(0, 100)}...
        </p>
        <div className="flex items-center justify-between text-gray-500 dark:text-gray-400">
          <span>{new Date(event.date).toLocaleDateString()}</span>
          <span>{event.location}</span>
        </div>
        <Link
          to={`/events/${event.slug}`}
          className="inline-flex py-2 px-4 mt-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 focus:ring-4 focus:ring-primary-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
