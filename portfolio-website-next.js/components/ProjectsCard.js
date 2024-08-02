import React from 'react';

const ProjectsCards = () => {
  const cards = [
    { id: 1, title: "Card 1", description: "Description 1" },
    { id: 2, title: "Card 2", description: "Description 2" },
    { id: 3, title: "Card 3", description: "Description 3" },
    { id: 4, title: "Card 4", description: "Description 4" },
    { id: 5, title: "Card 5", description: "Description 5" },
    // Add more cards as needed
  ];

  return (
    <div className="overflow-x-scroll flex space-x-4 p-4">
      {cards.map(card => (
        <div key={card.id} className="min-w-[300px] bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-2">{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCards;
