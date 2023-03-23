import React from "react";
function Home() {
  return (
    <div className="home">
      <div className="cars">
        <img src="/images/car1.avif" className="car1" />
        <img src="/images/car2.avif" className="home-car-img" />
        <img src="/images/car3.avif" className="home-car-img" />
      </div>
      {/* <div className="home-text">
        <p>Welcome to Cars</p>
      </div> */}
    </div>
  );
}

export default Home;
