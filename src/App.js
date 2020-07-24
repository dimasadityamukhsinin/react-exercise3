import React from 'react';
import './App.css';
import InfoStudent from './components/InfoStudent/InfoStudent';
import CardCourses from './components/CardCourses/CardCourses';

function App() {
  let image = 
  "https://www.pngitem.com/pimgs/m/233-2336335_transparent-aang-png-avatar-aang-png-download.png";
  let title1 = "HTML Full Course - Build a Website Tutorial";
  let title2 = "CSS Tutorial - Zero to Hero";
  let desc1 = "Learn the basics of HTML5 and web development in this awesome course for beginners.";
  let desc2 = "Learn CSS in this full course for beginners. CSS, or Cascading Style Sheet, is responsible for the styling and looks of a website. ";
  return (
    <div className="App">
      <InfoStudent 
        nama="Dimas Aditya Mukhsinin" 
        status={"Bootcamp Student".toUpperCase()} 
        bio={"Coding mengasah logika saya"} 
        url={image}
      />
      <h1>MY COURSES</h1>
      <div className="row">
        <CardCourses 
          url={image}
          title={title1}
          desc={desc1}
          link={"https://www.youtube.com/embed/pQN-pnXPaVg"}
        />
        <div className="item-2">
          <CardCourses 
            url={image}
            title={title2}
            desc={desc2}
            link={"https://www.youtube.com/embed/1Rs2ND1ryYc"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
