import React from 'react';
import './App.css';
import InfoStudent from './components/InfoStudent/InfoStudent';
import CardCourses from './components/CardCourses/CardCourses';

function App() {
  let image = 
  "https://www.pngitem.com/pimgs/m/233-2336335_transparent-aang-png-avatar-aang-png-download.png";
  let card = [
    {
      title1 : "HTML Full Course - Build a Website Tutorial",
      desc1  : "Learn the basics of HTML5 and web development in this awesome course for beginners."
    },
    {
      title1 : "CSS Tutorial - Zero to Hero",
      desc1  : "Learn CSS in this full course for beginners. CSS, or Cascading Style Sheet, is responsible for the styling and looks of a website."
    }
  ];
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
        {
          card.map((data) =>
            <CardCourses 
              url={image}
              title={data.title1}
              desc={data.desc1}
              link={"https://www.youtube.com/embed/pQN-pnXPaVg"}
            />
          )
        }
      </div>
    </div>
  );
}

export default App;
