import React from 'react';
import face from '../img/JoelHilton.jpg';

function HomePage() {
  return (
    <>
      {/* This has the HomePage information, the image and title */}
      <div className="text-center">
        <h3>Welcome to My Website</h3>
        <h4>I'm Joel Hilton</h4>
        <p>
          This website has a link to my podcast about movies, and a list of all
          the movies that I have seen
        </p>
        <br />
        <img src={face} alt="Joel's Head" width={350} />
      </div>
    </>
  );
}

export default HomePage;
