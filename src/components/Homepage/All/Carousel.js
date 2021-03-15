import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Carousel.css";

class MyCarousel extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        transitionTime={900}>
        <div className="carousel">
          <img
            src={process.env.PUBLIC_URL + "/images/a.jpg"}
            className="show"
          />
          <p className="legend">
            सर्वोत्कृस्त जिवन : शस्वोत चिन्तन-Thoughts for Superb Living
          </p>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/b.jpg"}
            className="show"
          />
          <p className="legend">
            सर्वोत्कृस्त जिवन : शस्वोत चिन्तन-Thoughts for Superb Living
          </p>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/c.jpg"}
            className="show"
          />
          <p className="legend">
            सर्वोत्कृस्त जिवन : शस्वोत चिन्तन-Thoughts for Superb Living
          </p>
        </div>
      </Carousel>
    );
  }
}

export default MyCarousel;
