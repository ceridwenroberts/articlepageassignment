import React, { useState } from 'react';

const articles = [
  {
    title: 'Article 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Article 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Article 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/150'
  },
];

const Pagination = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleAll = () => {
    setCurrentIndex(null);
  };

  const handleSingle = (article) => {
    setCurrentIndex(0);
    
    
  }

  return (
    <div>
      {currentIndex === null ? (
        articles.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <img src={article.image} alt={article.title} />
            {console.log(index) }
            <button onClick = {() => setCurrentIndex(index)}>To article</button>
          </div>
        ))
      ) : (
        <div>
          <h3>{articles[currentIndex].title}</h3>
          <p>{articles[currentIndex].description}</p>
          <img src={articles[currentIndex].image} alt={articles[currentIndex].title} />
        </div>
      )}
      {currentIndex !== null && (
        <div>
          <button onClick={handlePrevious} disabled={currentIndex === 0}>
            Previous
          </button>
          <button onClick={handleNext} disabled={currentIndex === articles.length - 1}>
            Next
          </button>
          <button onClick={handleAll}>All</button>
        </div>
      )}
      {currentIndex === null && (
        <button onClick={handleSingle}></button>
      )}
    </div>
  );
};

export default Pagination;