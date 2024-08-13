import React from 'react'
import './gallery.css'
import Image1 from '../../assets/gallery/armario.jpg'

export const Gallery = () => {
  return (
    <div className="gallery">
        <h2>Galeria</h2>
      <div id="carouselExampleCaptions" class="carousel slide h-50 w-100 mt-0">
          <div class="carousel-indicators h-25">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner h-100">
            <div class="carousel-item active ">
              <img src={Image1} class="d-block w-100 h-100" alt="..."/>
              <div class="carousel-caption d-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Image1} class="d-block w-100 h-100" alt="..."/>
              <div class="carousel-caption d-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Image1} class="d-block w-100 h-100" alt="..."/>
              <div class="carousel-caption  d-block">
                <h5>Third slide label</h5>
                <p class="h-50">Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev h-100" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next h-100" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
      </div>
    </div>
  )
}
