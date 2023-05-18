import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { foods } from "../UpcomingFoods/UpcomingFoods";

const UpcomingFoods = () => {
  return (
    <div>
      <div className="mb-8 ">
        <h2 className="md:text-4xl text-4xl font-bold  capitalize ">
          Upcomming Food
        </h2>
      </div>
      <div>
        <Swiper
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {foods?.map((info) => {
            return (
              <SwiperSlide key={info?.id}>
                <section>
                  <div className="container max-w-xl mx-auto">
                    <div
                      style={{
                        backgroundImage: `url(${info?.img})`,
                      }}
                      className="bg-cover bg-center bg-no-repeat h-[200px]"
                    ></div>
                    <div>
                      <h2 className="text-center my-3 text-xl font-bold">
                        {info?.name}
                      </h2>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default UpcomingFoods;
