import React from 'react';
import Title from './All/Title';
import MyCarousel from './All/Carousel';
import Chairman from './All/Chairman';
import Gallery from './All/Gallery';
import Social from './All/Social';
import Shape from '../Common/Shape';

const Main = () => {
	return (
		<div className="container">
			<Title />
			<MyCarousel />
			{/* <div
        className="social-section payment payment-whole-sec"
        style={{ width: "100%" }}>
        <Shape title="Donation Gateway" />
        <div
          className="e-sewa-holder"
          style={{
            width: "90%",
            margin: "0 auto",
            textAlign: "center"
          }}>
          <img
            src={process.env.PUBLIC_URL + "/images/payment.jpg"}
            alt=""
            style={{ width: "50%" }}
          />
        </div>
        <h3>Help Us</h3>
      </div> */}
			<Chairman />
			<Gallery />
			<Social />
		</div>
	);
};

export default Main;
