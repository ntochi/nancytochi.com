import React from 'react';

const ProjectsCard = () => {
  const cards = [
    { id: 1, title: "Card 1", description: "Description 1", imageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    { id: 2, title: "Card 2", description: "Description 2", imageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    { id: 3, title: "Card 3", description: "Description 3", imageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    { id: 4, title: "Card 4", description: "Description 4", imageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
    { id: 5, title: "Card 5", description: "Description 5", imageUrl: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" },
  ];

  return (
    <div className="overflow-x-scroll flex space-x-6 p-4">
      {cards.map(card => (
        <div key={card.id} className="min-w-max overflow-hidden bg-white rounded-lg shadow-md">
          <img className="object-cover w-full h-64" src={card.imageUrl} alt="Article" />
          
          <div className="p-6">
            <div>
              <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
              <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{card.title}</a>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{card.description}</p>
            </div>
            <div className="mt-4">
              <div className="flex items-center">
                <div className="flex items-center">
                  <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                  <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">Jone Doe</a>
                </div>
                <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCard;
