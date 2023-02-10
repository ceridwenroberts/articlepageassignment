import React, { useState } from 'react';

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
    title: 'Projectdesign',
    textContent:  (        
      <p>Jag tänker mig en gridbaserad layout där icke-använda element är paket. <a href="https://dribbble.com/shots/19836318-HUMY-Property-Website"> Baserat på HUMY - Property Website</a></p>),
    image: 'src/ScreenshotHUMY.png',
    alt: 'Screen shot of HUMY - Property Website'
  },
];

// const articles = [
  //     {
  //       key: '1st article',
  //       title: 'Om mig',
  //       content: 'Min erfarenhet av programmering är ganska begränsad. Det jag kan sedan tidigare har jag antingen lärt mig via "lär dig koda"-appar de senaste åren, eller det lilla som var en del av programmet för Journalistik och multimedia när jag gick det. Dels var det lite grundläggande html och CSS, men länge sen och väldigt lite, och handlade mer om hur "data mining" och hur man hanterar stora mängder data för att se mönster och sånt som kan vara intressant ur ett journalistiskt perspektiv. Min kompetens ligger istället mer åt estetik/design och att lära mig förverkliga idéer om interaktiv design/animation intresserar mig. Men jag leds gärna in på andra banor.'
  //     },
  //     {
  //       key: '2nd article',
  //       title: 'Projektidé',
  //       content: 'Jag tänker mig en nedräknare till antingen användarens fördelse dag eller julafton. Något tillfälle då man får paket. Dels för att det är roligt, för att det inte blir för svårt och för att det lämpar sig ganska bra för en design.'
  //     },
  //     {
  //       key: '3rd article',
  //       title: 'Projektdesign',
  //       picture: 'src/ScreenshotHUMY.png',
  //       // alt: "Screen shot of HUMY - Property Website",
  //       content: (
  //         <p>Jag tänker mig en gridbaserad layout där icke-använda element är paket. <a href="https://dribbble.com/shots/19836318-HUMY-Property-Website"> Baserat på HUMY - Property Website</a>
  //         </p>),
  //     },
  //   ];


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
    <div className='pageContent'>
      <div className='header'>
      <h1>Assignment 1: Basics + HTML/CSS + Interactivity 1</h1>
      </div>
      {currentIndex === null ? (
        articles.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.textContent}</p>
            <img src={article.image} alt={article.alt} />
            {console.log(index) }
            <button onClick = {() => setCurrentIndex(index)}>To article</button>
          </div>
        ))
      ) : (
        <div className='mainContent article'>
          <h3>{articles[currentIndex].title}</h3>
          <p>{articles[currentIndex].textContent}</p>
          <img src={articles[currentIndex].image} alt={articles[currentIndex].title} />
        </div>
      )}
      {currentIndex !== null && (
        <div className='btnContainer'>
          <button id='prevBtn' onClick={handlePrevious} disabled={currentIndex === 0}>
            Previous
          </button>
          <button id='nextBtn' onClick={handleNext} disabled={currentIndex === articles.length - 1}>
            Next
          </button>
          <button id='allBtn' onClick={handleAll}>All</button>
        </div>
        
      )}
    </div>
  );
};

export default Pagination;


// <button onClick = {() => {
//   setCurrentIndex({index});
//   console.log(index);
// }}>Back</button>


// import React, { useState } from 'react'
// import './App.css'


// const Article = ({ title, content, picture }) => (
//   <div className='article'>
//     <h3>{title}</h3>
//     <img src={picture} width="75%" />
//     <p className='articleContent'>{content}</p>
//   </div>
// );



// const ArticleList = ({ articles, page, setPage }) => {
//   const startIndex = (page - 1);
//   // const [endIndex, setEndIndex] = useState(startIndex + 1);
//   const endIndex = startIndex + 1;
//   const visibleArticles = articles.slice(startIndex, endIndex);
//   let visibleArticlesAll = articles.slice(0, articles.length);
//   console.log(visibleArticlesAll);

//   return (
//     <div className='pageContent'>


      

//       {visibleArticles.map(({ title, content, picture }) => (
//         <Article key={title} title={title} content={content} picture={picture} />
//       ))}

//       <div className='buttons'>
//         {page > 1 && (
//           <button className='prev' onClick={() => setPage(page - 1)}>Previous</button>
//         )}
//         <button className='current' onClick={() => setPage(page)}>{page}</button>

//         {articles.length > endIndex && (
//           <button className='next' onClick={() => setPage(page + 1)}>Next</button>
//         )}


//       </div>
//     </div>//pageComponent
//   );
// };

// // console.log("all clicked");
// const articlesData = [
//   {
//     key: '1st article',
//     title: 'Om mig',
//     content: 'Min erfarenhet av programmering är ganska begränsad. Det jag kan sedan tidigare har jag antingen lärt mig via "lär dig koda"-appar de senaste åren, eller det lilla som var en del av programmet för Journalistik och multimedia när jag gick det. Dels var det lite grundläggande html och CSS, men länge sen och väldigt lite, och handlade mer om hur "data mining" och hur man hanterar stora mängder data för att se mönster och sånt som kan vara intressant ur ett journalistiskt perspektiv. Min kompetens ligger istället mer åt estetik/design och att lära mig förverkliga idéer om interaktiv design/animation intresserar mig. Men jag leds gärna in på andra banor.'
//   },
//   {
//     key: '2nd article',
//     title: 'Projektidé',
//     content: 'Jag tänker mig en nedräknare till antingen användarens fördelse dag eller julafton. Något tillfälle då man får paket. Dels för att det är roligt, för att det inte blir för svårt och för att det lämpar sig ganska bra för en design.'
//   },
//   {
//     key: '3rd article',
//     title: 'Projektdesign',
//     picture: 'src/ScreenshotHUMY.png',
//     // alt: "Screen shot of HUMY - Property Website",
//     content: (
//       <p>Jag tänker mig en gridbaserad layout där icke-använda element är paket. <a href="https://dribbble.com/shots/19836318-HUMY-Property-Website"> Baserat på HUMY - Property Website</a>
//       </p>),
//   },
// ];


// const ArticlePage = () => {
//   const [page, setPage] = useState(1);
//   const articles = [
//     {
//       key: '1st article',
//       title: 'Om mig',
//       content: 'Min erfarenhet av programmering är ganska begränsad. Det jag kan sedan tidigare har jag antingen lärt mig via "lär dig koda"-appar de senaste åren, eller det lilla som var en del av programmet för Journalistik och multimedia när jag gick det. Dels var det lite grundläggande html och CSS, men länge sen och väldigt lite, och handlade mer om hur "data mining" och hur man hanterar stora mängder data för att se mönster och sånt som kan vara intressant ur ett journalistiskt perspektiv. Min kompetens ligger istället mer åt estetik/design och att lära mig förverkliga idéer om interaktiv design/animation intresserar mig. Men jag leds gärna in på andra banor.'
//     },
//     {
//       key: '2nd article',
//       title: 'Projektidé',
//       content: 'Jag tänker mig en nedräknare till antingen användarens fördelse dag eller julafton. Något tillfälle då man får paket. Dels för att det är roligt, för att det inte blir för svårt och för att det lämpar sig ganska bra för en design.'
//     },
//     {
//       key: '3rd article',
//       title: 'Projektdesign',
//       picture: 'src/ScreenshotHUMY.png',
//       // alt: "Screen shot of HUMY - Property Website",
//       content: (
//         <p>Jag tänker mig en gridbaserad layout där icke-använda element är paket. <a href="https://dribbble.com/shots/19836318-HUMY-Property-Website"> Baserat på HUMY - Property Website</a>
//         </p>),
//     },
//   ];
//   return (
//     <ArticleList articles={articles} page={page} setPage={setPage} />
//   );
  
// };





// // function ReptileListItems() {
// //   const reptiles = ["alligator", "snake", "lizard"];

// //   return reptiles.map((reptile) => <li>{reptile}</li>);
// // }



// export default ArticlePage;


// // import beach from './assets/beach.jpeg'


// function getActiveClassName(activeArticle, currentArticle) {
//   if (activeArticle === currentArticle) {
//     return 'show-article'
//   } else {
//     return 'hide-article'
//   }
// }

// // function App() {
// //  const [activeArticle, setActiveArticle] = useState('1st Article')

// //   return (
// //     <>
// //       <article className={`active ${getActiveClassName(activeArticle, '1st Article')}`} >
// //         <h1>About Me</h1>
// //         <p>Min erfarenhet av programmering är ganska begränsad. Det jag kan sedan tidigare har jag antingen lärt mig via "lär dig koda"-appar de senaste åren, eller det lilla som var en del av programmet för Journalistik och multimedia när jag gick det. Dels var det lite grundläggande html och CSS, men länge sen och väldigt lite, och handlade mer om hur "data mining" och hur man hanterar stora mängder data för att se mönster och sånt som kan vara intressant ur ett journalistiskt perspektiv.
// //         Min kompetens ligger istället mer åt estetik/design och att lära mig förverkliga idéer om interaktiv design/animation intresserar mig. Men jag leds gärna in på andra banor.</p>
// //         <img className='beach' src={beach} alt="" />
// //       </article>
// //       <article className={`active ${getActiveClassName(activeArticle, '2nd Article')}`} >
// //           <h1>Projektidé</h1>
// //         <p>Jag tänker mig en nedräknare till antingen användarens fördelse dag eller julafton. Något tillfälle då man får paket. Dels för att det är roligt, för att det inte blir för svårt och för att det lämpar sig ganska bra för en design.</p>
// //         <img className='beach' src={beach} alt="" />
// //       </article>
// //       <article className={`active ${getActiveClassName(activeArticle, '3rd Article')}`} >
// //           <h1>Projektidé</h1>
// //         <p>Jag tänker mig en nedräknare till antingen användarens fördelse dag eller julafton. Något tillfälle då man får paket. Dels för att det är roligt, för att det inte blir för svårt och för att det lämpar sig ganska bra för en design.</p>
// //         <img className='beach' src={beach} alt="" />
// //       </article>
// //       <div className='article'>
// //         <button onClick={() => {
// //           setActiveArticle((a) => {
// //             if (a === '1st Article') {
// //               return '2nd Article'
// //             } else {
// //               return '1st Article'
// //             }
// //           })
// //         }}>Switch Article</button>
// //       </div>
// //     </>
// //   )
// // }

// // export default App
