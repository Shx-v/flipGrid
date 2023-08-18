import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/bundle";
import Swiper from "swiper/bundle";
const SliderComponent = () => {
  useEffect(() => {
    const swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2400,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className="m-0 h-96 bg-gray-100 flex justify-center items-center">
      <div className="w-full h-full bg-white rounded-lg shadow-lg flex items-center">
        <div className="swiper mySwiper h-full">
          <div className="swiper-wrapper ">
            <div className="swiper-slide swiper-slide--style p-6">
              <div className="container__text">
                <h2 className="text-xl font-semibold mb-2">Name One</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates commodi tempora at!
                </p>
              </div>
              <div
                id="slide__img1"
                className="slide__img--img bg-cover bg-center"
                style={{
                  backgroundImage:
                    "../../public/img1.jpeg" ,
                }}
              ></div>
            </div>

            <div className="swiper-slide swiper-slide--style p-6">
              <div className="container__text">
                <h2 className="text-xl font-semibold mb-2">Name One</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates commodi tempora at!
                </p>
              </div>
              <div
                id="slide__img1"
                className="slide__img--img bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
                }}
              ></div>
            </div>

            <div className="swiper-slide swiper-slide--style p-6">
              <div className="container__text">
                <h2 className="text-xl font-semibold mb-2">Name One</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates commodi tempora at!
                </p>
              </div>
              <div
                id="slide__img1"
                className="slide__img--img bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
                }}
              ></div>
            </div>

            <div className="swiper-slide swiper-slide--style p-6">
              <div className="container__text">
                <h2 className="text-xl font-semibold mb-2">Name One</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates commodi tempora at!
                </p>
              </div>
              <div
                id="slide__img1"
                className="slide__img--img bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
                }}
              ></div>
            </div>
            {/* Other slides */}
          </div>
          <div className="swiper-button-next text-gray-600"></div>
          <div className="swiper-button-prev text-gray-600"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
