import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-600"
        >
          {/* Twisted rope design */}
          <path
            d="M8 6C12 10 16 6 20 10C24 14 28 10 32 14"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M8 14C12 18 16 14 20 18C24 22 28 18 32 22"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M8 22C12 26 16 22 20 26C24 30 28 26 32 30"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          {/* Connecting lines to show rope structure */}
          <path
            d="M8 6L8 22M32 14L32 30"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-800">PP Rope & Twine</span>
        <span className="text-xs text-gray-600 uppercase tracking-wider">Manufacturing</span>
      </div>
    </div>
  );
};

export default Logo;