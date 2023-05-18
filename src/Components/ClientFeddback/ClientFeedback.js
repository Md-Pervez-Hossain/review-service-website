import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

const ClientFeedback = () => {
  const [loading, setLoading] = useState(false);
  const [feedBacks, setFeedBacks] = useState([]);
  console.log(feedBacks);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/feedback"
    )
      .then((res) => res.json())
      .then((data) => {
        setFeedBacks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {feedBacks?.length <= 0 ? (
        <>
          <p>No Feedback yet</p>
        </>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-16 items-center my-16">
            <div
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h2 className=" text-3xl font-bold my-5">Clients FeedBack</h2>
              <p>
                Fast food is a type of mass-produced food designed for
                commercial resale, with a strong priority placed on speed of
                service. It is a commercial term, <br /> limited to food sold in
                a restaurant or store with frozen, preheated or precooked
                ingredients and served in packaging for take-out/take-away.
              </p>
            </div>
            <div>
              {loading ? (
                <>
                  <div className="flex justify-center items-center h-screen">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-600"></div>
                  </div>
                </>
              ) : (
                <>
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                    slidesPerView={1}
                    spaceBetween={10}
                    slidesPerGroup={1}
                    loop={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      "@0.75": {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      "@1.00": {
                        slidesPerView: 1,
                        spaceBetween: 40,
                      },
                      "@1.50": {
                        slidesPerView: 1,
                        spaceBetween: 50,
                      },
                    }}
                  >
                    {feedBacks?.map((info) => {
                      return (
                        <SwiperSlide key={info.id}>
                          <section className="p-6">
                            <div className="container max-w-xl mx-auto">
                              <div className="flex  items-center gap-5   rounded-md lg:h-full lg:p-8">
                                {info?.img ? (
                                  <>
                                    {" "}
                                    <div>
                                      <img
                                        src={info?.img}
                                        alt=""
                                        className="w-32 h-32 rounded-full dark:bg-gray-500"
                                      />
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {" "}
                                    <div>
                                      <img
                                        src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                                        alt=""
                                        className="w-32 h-32 rounded-full dark:bg-gray-500"
                                      />
                                    </div>
                                  </>
                                )}

                                <div className=" dark:text-gray-400">
                                  <p className="text-3xl font-semibold ">
                                    {info?.name}
                                  </p>

                                  <p>{info?.feedback}</p>
                                </div>
                              </div>
                            </div>
                          </section>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ClientFeedback;
