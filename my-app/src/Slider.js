import React from "react";
import Slide1 from "./Slide1.jpg"
import  Slide2 from "./Slide2.jpg"
import  Slide3 from "./Slide3.jpg"

   function Slider() {
    return(
    <div>
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={Slide1} class="d-block w-100" alt="..." height={650}/>
      <div class="carousel-caption d-none d-md-block">
       <div style={{ color:'white'}}> <h1>Photography</h1>
        <h4>The real voyage of discovery consists not in seeking new landscape, but in having new eyes.</h4>
      </div>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={Slide2} class="d-block w-100" alt="..."height={650}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{ color:'white'}}> <h1>Adventure</h1>
        <h4>The real voyage of discovery consists not in seeking new landscape, but in having new eyes.</h4>
      </div>
    </div>
    </div>
    <div class="carousel-item">
      <img src={Slide3} class="d-block w-100" alt="..." height={650}/>
      <div class="carousel-caption d-none d-md-block">
      <div style={{ color:'black'}}> <h1>Explore</h1>
        <h4>The real voyage of discovery consists not in seeking new landscape, but in having new eyes.</h4>
      </div>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
);
}
export default Slider;