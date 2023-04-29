import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {

  return (
    <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-2xl font-medium text-gray-500 mb-8">Oops! Page not found.</p>
          <Link to="/signin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go back
          </Link>
        </div>
      </div>
  );
};

export default Notfound;