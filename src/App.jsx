import React, { useState } from 'react';
import Screenshot from './assets/ScreenshotHUMY.png';

const articles = [
  {
    title: 'Om mig',
    textContent: 'Min erfarenhet av programmering är ganska begränsad. Det jag kan sedan tidigare har jag antingen lärt mig via "lär dig koda"-appar de senaste åren, eller det lilla som var en del av programmet för Journalistik och multimedia när jag gick det. Dels var det lite grundläggande html och CSS, men länge sen och väldigt lite, och handlade mer om hur "data mining" och hur man hanterar stora mängder data för att se mönster och sånt som kan vara intressant ur ett journalistiskt perspektiv. Min kompetens ligger istället mer åt estetik/design och att lära mig förverkliga idéer om interaktiv design/animation intresserar mig. Men jag leds gärna in på andra banor.',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Projektidé',
    textContent: 'Jag tänker mig en nedräknare till antingen användarens fördelse dag eller julafton. Något tillfälle då man får paket. Dels för att det är roligt, för att det inte blir för svårt och för att det lämpar sig ganska bra för en design.',
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Projektdesign',
    textContent:  (        
      <p>Jag tänker mig en gridbaserad layout där icke-använda element är paket. <a href="https://dribbble.com/shots/19836318-HUMY-Property-Website"> Baserat på HUMY - Property Website</a></p>),
    image: Screenshot,
    alt: 'Screenshot of HUMY - Property Website'
  },
];

const Pagination = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentArticle = articles[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex(currentIndex - 1);
    document.title = currentArticle.title;

  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    document.title = currentArticle.title;

  };

  const handleAll = () => {
    setCurrentIndex(null);
    document.title = "All articles";
  };

  const handleSingle = (article) => {
    setCurrentIndex(0);   
  };

// const currentArticle = articles[currentIndex];
 
  return (
    <div className='wrapper'>
      <div className='header'>
      <h2>Assignment 1: Basics + HTML/CSS + Interactivity 1</h2>
      </div>
      {currentIndex === null ? (
        articles.map((article, index) => (
          <div className='articleSection' key={index}>
            
            <h3>{article.title}</h3>
            <p>{article.textContent}</p>
            <img src={article.image} alt={article.alt} />
            {console.log(index) }
            <button className='btnSmall' onClick = {() => setCurrentIndex(index)}>To article</button>
          </div>
        ))
      ) : (
        <wrapper className='mainContent article'>
          <div className='box'>
          <h1>{articles[currentIndex].title}</h1>
          </div>
          <p className='box' id='text'>{articles[currentIndex].textContent}</p>
          <img src={articles[currentIndex].image} alt={articles[currentIndex].title} />
        </wrapper>
      )}
      {currentIndex !== null && (
        <div className='btnContainer sticky'>
          <button id='prevBtn' className='btnSmall' onClick={handlePrevious} disabled={currentIndex === 0}>
            Previous
          </button>
          <button id='nextBtn' className='btnSmall' onClick={handleNext} disabled={currentIndex === articles.length - 1}>
            Next
          </button>
          <button id='allBtn' className='btnSmall' onClick={handleAll}>All</button>
        </div>
        
      )}
    </div>
  );
};

export default Pagination;