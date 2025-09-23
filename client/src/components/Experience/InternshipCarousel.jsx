import React from "react";
import Slider from "react-slick";

const InternshipCarousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full py-10 px-10">
      <Slider {...settings}>
        {items.images.map((img, index) => (
          <div key={index} className="p-2">
            <img
              src={img}
              alt={`Internship-${index}`}
              className="w-full h-60 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default InternshipCarousel;
