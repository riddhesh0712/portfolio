import React from 'react';

// Utility function to truncate text
const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

const ArticleCard = ({ image, title, date, comments, description }) => {
    const truncatedDescription = truncateText(description, 100); // Adjust the maxLength as needed
  return (
    <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden shadow-xl mb-6">
      <img className="md:w-1/3 object-cover" src={image} alt="Article" />
      <div className="md:w-2/3 p-3 md:p-6">
        <h2 className="text-teal-400 text-md md:text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-500 text-xs md:text-sm mb-4">
          {date} | {comments} Comments
        </p>
        <p className="text-gray-400 mb-6">{truncatedDescription}</p>
        <button className="text-teal-500 hover:text-white hover:bg-secondary-30 border border-teal-500 hover:border-transparent py-1 md:py-2 px-2 md:px-4 rounded">
          READ MORE &gt;
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;