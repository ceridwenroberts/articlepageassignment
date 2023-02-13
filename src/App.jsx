import React, { useState } from 'react';
import Screenshot from './assets/ScreenshotHUMY.png';
import Aboutimg from './assets/about_collage.png';
import Ideaimg from './assets/field_of_vision.png';

const articles = [
  {
    title: 'Om mig',
    textContent: 'Min erfarenhet av programmering består av html, css och grundläggande javaScript och jQuery. Det mest liknande jag har hållit på med förut är "data mining", alltså hur man hanterar stora mängder data för att se mönster och sånt som kan vara intressant ur ett journalistiskt perspektiv. Min kompetens är inom framförallt estetik/design och att lära mig förverkliga idéer om interaktiv design/animation intresserar mig. Men jag leds gärna in på andra banor.',
    image: Aboutimg, 
    alt: 'a picture of "me" and a drawing of a buddy doing a faceplant'
  },
  {
    title: 'Projektidé',
    textContent: 'Jag tänker mig en nedräknare till antingen användarens fördelse dag eller julafton. Något tillfälle då man får paket. Dels för att det är roligt, för att det inte blir för svårt och för att det lämpar sig ganska bra för en design.',
    image: Ideaimg,
    alt: 'drawing of man with tv:s for glases, sitting in a field'
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
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageIndicator = (index) => {
    setCurrentIndex(index);
  }

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

  // const handlePageIndicator () => 
  // };

// const currentArticle = articles[currentIndex];
 
  return (
    <div className='wrapper'>
      <div className='header'>
      <h2>Assignment 1: Basics + HTML/CSS + Interactivity 1</h2>
      </div>
      {currentIndex === null ? (
        <div>
           <div className='box' id='headingAll'>  
          <h1>All articles</h1>
          </div>
      {  articles.map((article, index) => (
          <div className='articleSection' key={index}>  
           <div className='box' id='headingBox'>        
            <h2>{article.title}</h2>
            </div>
            <p className='box' id='textBoxAll'>{article.textContent}</p>
            <img src={article.image} alt={article.alt} />
            {console.log(index) }
            <button className='btnSmall' id='btnToArticle' onClick = {() => setCurrentIndex(index)}>To article</button>
          </div>
        )) }
        </div>
      ) : (
        <wrapper className='mainContent article'>
          <div className='box' id='headingBox'>
          <h1>{articles[currentIndex].title}</h1>
          </div>
          <div className='box' id='textBox'>
          <p id='text'>{articles[currentIndex].textContent}</p>
          </div>
          <img src={articles[currentIndex].image} alt={articles[currentIndex].title} />
        </wrapper>
      )}
      {currentIndex !== null && (
        <div className='btnContainer sticky'>     
          <button id='prevBtn' className='btnSmall' onClick={handlePrevious} disabled={currentIndex === 0}>
            Previous
          </button>
          <div className='pageIndicator'>
            <button onClick={() => handlePageIndicator(0)} id='btnPage1' className='btnSmall' style={currentIndex=== 0 ? { backgroundColor: "#DBACFF"} : {}}>1</button>
            <button onClick={() => handlePageIndicator(1)} id='btnPage2' className='btnSmall' style={currentIndex=== 1 ? { backgroundColor: "#DBACFF"} : {}}>2</button>
            <button onClick={() => handlePageIndicator(2)} id='btnPage3' className='btnSmall' style={currentIndex=== 2 ? { backgroundColor: "#DBACFF"} : {}}>3</button>
          </div>
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