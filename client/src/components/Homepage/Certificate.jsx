import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCertification } from "../../store/certificateSlice";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function Certificate() {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector(
    (state) => state.certification
  );

  useEffect(() => {
    dispatch(fetchCertification());
  }, [dispatch]);

  if (isLoading) {
    return (
      <section className="h-[100vh] flex justify-center items-center bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 "></div>
          <p className="text-xl font-semibold text-gray-600 dark:text-gray-300">
            Fetching Achievements...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="h-[100vh] flex justify-center items-center bg-gray-50 dark:bg-gray-900">
        <div className="text-red-500 text-center p-8 rounded-xl bg-white dark:bg-gray-800 shadow-2xl">
          <h3 className="font-bold text-xl mb-2">Error Loading Certificates</h3>
          <p className="font-medium">
            Please try refreshing the page or check your connection.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 h-auto min-h-[100vh] flex items-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="w-full">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="flex justify-center items-center gap-4 text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-yellow-400 tracking-tight"
        >
          <span>My Achievements & Certifications</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
          className=" mx-auto px-6 lg:px-8"
        >
          {items?.certificates && items.certificates.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
              effect="coverflow"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              centeredSlides={true}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 40,
                },
                1280: {
                  slidesPerView: 3.5,
                  spaceBetween: 50,
                },
              }}
              className="pb-20 pt-8 "
            >
              {items.certificates.map((img, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="h-[300px] sm:h-[400px] lg:h-[450px] cursor-pointer rounded-xl overflow-hidden shadow-2xl transition duration-300 ease-in-out border-4 border-white dark:border-gray-700 "
                  >
                    <img
                      src={img}
                      alt={`Certificate-${index + 1}`}
                      className="w-full h-full object-contain bg-white dark:bg-gray-800 p-2"
                      loading="lazy"
                    />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No certificates found yet. Check back soon!
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Certificate;
