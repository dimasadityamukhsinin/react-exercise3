import React from 'react';
import './App.css';
import InfoStudent from './components/InfoStudent/InfoStudent';
import CardCourses from './components/CardCourses/CardCourses';

function App() {
  let image = 
  "https://www.pngitem.com/pimgs/m/233-2336335_transparent-aang-png-avatar-aang-png-download.png";
  let title1 = "HTML Full Course - Build a Website Tutorial";
  let desc1 = "Learn the basics of HTML5 and web development in this awesome course for beginners.";
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
            title={title1}
            desc={desc1}
            link={"https://www.youtube.com/embed/pQN-pnXPaVg"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
