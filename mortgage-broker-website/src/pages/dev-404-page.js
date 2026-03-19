import React from "react";
import { Link } from "gatsby";

const Dev404Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50 flex items-center justify-center">
      <div className="text-center px-4 max-w-2xl">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Page not found</p>
        <p className="text-gray-500 mb-8">
          This is a development 404 page. In production, users will see the custom 404 page.
        </p>
        <div className="space-y-4">
          <Link 
            to="/" 
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Go Home
          </Link>
          <div className="text-sm text-gray-400">
            <p>Gatsby development server</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dev404Page;
