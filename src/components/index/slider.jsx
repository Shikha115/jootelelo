import React, { useState } from "react";
import { Link } from "react-router-dom";

function Slider() {
  const [slider, setSlider] = useState([
    {
      id: "1",
      img: "assets/images/banner_new_two.png",
      animation: "animate__bounceInDown",
      active: true,
      h1: "GET UP TO 50% SALE",
      p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      class:' slider_two'
    },
    {
      id: "2",
      img: "assets/images/shoe_image_for_bannerthree.png",
      animation: "animate__rotateIn",
      active: false,
      h1: "GET UP TO 50% SALE",
      p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      class:'slider_three'
    },
    {
      id: "3",
      img: "assets/images/banner_new_one.png",
      animation: "animate__bounceInLeft",
      active: false,
      h1: 'GET UP TO 50% SALE',
      p: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      class:'slider_one'
    },
  ]);
  return (
    <section id="banner">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {slider.map((item) => {
           return (
            <div key={item.id} className={item.active ? "carousel-item active" : "carousel-item"}>
                <div className={`slider_main ${item.class}`} style={{ backgroundImage: `url(${item.img})` }}>
                    <div className="container">
                        <h1 className={`animate__animated ${item.animation}`}>{item.h1}</h1>
                        <p className={`animate__animated ${item.animation}`}>{item.p}</p>
                        <div className={`banner_button animate__animated ${item.animation}`}>
                        <Link to="/products">
                            <button className="banner_button">Shop Now</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
           )
          
          })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
          <span className="carousel-control-next-icon" aria-hidden="true" ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Slider;
