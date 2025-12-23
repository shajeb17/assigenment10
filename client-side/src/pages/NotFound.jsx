import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
        <h1 className="text-7xl font-extrabold text-purple-600">404</h1>

        <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>

        <p className="text-gray-600 mt-2 max-w-md">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
