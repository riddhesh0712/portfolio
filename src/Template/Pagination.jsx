import React from 'react';

const Pagination = () => {
  return (
    <div className="flex justify-center mt-6">
      <button className="bg-teal-500 text-white py-2 px-4 rounded-l">
        1
      </button>
      <button className="bg-gray-700 text-teal-500 py-2 px-4">
        2
      </button>
      <button className="bg-gray-700 text-teal-500 py-2 px-4">
        3
      </button>
      <button className="bg-gray-700 text-teal-500 py-2 px-4">
        4
      </button>
      <button className="bg-gray-700 text-teal-500 py-2 px-4 rounded-r">
        &gt;
      </button>
    </div>
  );
};

export default Pagination;