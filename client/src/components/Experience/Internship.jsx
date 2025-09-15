import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInternship } from "../../store/internshipSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Internship() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.internship);

  useEffect(() => {
    dispatch(fetchInternship());
  }, [dispatch]);

  if (isLoading)
    return <p className="text-white text-center mt-10">Loading...</p>;
  if (error)
    return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  if (!items)
    return <p className="text-white text-center mt-10">No data found.</p>;

  return (
    <section className="m-20">
      <section
        className="relative w-full min-h-[80vh] bg-cover bg-center flex flex-col lg:flex-row items-center justify-between px-10 py-20 text-white"
        style={{ backgroundImage: `url(${items.bg_image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 flex-1 space-y-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow">
            {items.title}
          </h1>

          <div className="flex flex-wrap gap-4">
            {items.developed?.map((icon, i) => (
              <div
                key={i}
                className="w-14 h-14 bg-white/10 backdrop-blur rounded-xl p-2 flex items-center justify-center hover:scale-110 transition"
              >
                <img
                  src={icon}
                  alt={`Tech-${i}`}
                  className="w-10 h-10 object-contain"
                />
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-200 leading-relaxed">
            {items.description}
          </p>
        </div>

        <div className="relative z-10 w-full lg:w-1/2 mt-10 lg:mt-0">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
          >
            {items.images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative group rounded-xl overflow-hidden shadow">
                  <img
                    src={img}
                    alt={`Internship-${i}`}
                    className="w-full h-96 object-cover duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <span className="text-white text-sm font-medium">
                      Internship Project {i + 1}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </section>
  );
}

export default Internship;
