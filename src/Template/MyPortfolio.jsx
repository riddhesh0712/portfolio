import React from 'react';

const portfolioItems = [
  {
    title: 'Project 1',
    description: 'Description for project 1.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 3',
    description: 'Description for project 3.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    title: 'Project 4',
    description: 'Description for project 4.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-secondary-30 text-primary-60 flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-20">My Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 bg-">
        {portfolioItems.map((item, index) => (
          <div key={index} className="bg-thirtary-10 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <img className="w-full h-32 object-cover rounded-t-lg" src={item.imageUrl} alt={item.title} />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;