import React from 'react';
function Podcast() {
  return (
    <>
      {/* This has other little infomration that makes the webiste better */}
      <div className="row">
        <div className="col-12 text-center">
          <h1>My Podcast</h1>
        </div>
      </div>
      <div className="row">
        <div className="text-center">
          <p>Follow this link to my podcast for a dope listen</p>
          <br />
          {/* Here's the link for the podcast site */}
          <a className="btn border" href="https://baconsale.com/">
            PODCAST
          </a>
        </div>
      </div>
    </>
  );
}

export default Podcast;
