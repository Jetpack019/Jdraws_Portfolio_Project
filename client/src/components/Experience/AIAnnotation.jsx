import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnnotation } from "../../store/annotationSlice";

function AIAnnotation() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.annotation);

  useEffect(() => {
    dispatch(fetchAnnotation());
  }, [dispatch]);

  if (isLoading) return <p className="text-white">Loading experience...</p>;
  if (error) return <p className="text-red-500">Error loading: {error}</p>;
  if (!items) return <p className="text-white">No experience found.</p>;

  return (
    <section className="p-10 bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
      <h1 className="text-4xl font-extrabold text-white mb-10 text-center">
        AI Annotation Projects
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 p-6 ">
          <h2 className="text-xl font-medium text-white ">Work With:</h2>
          <div className="flex gap-4 ">
            {items.work?.map((icon, i) => (
              <img
                key={i}
                src={icon}
                alt={`Tech-${i}`}
                className="w-50 h-50 object-contain hover:scale-110 transition"
              />
            ))}
          </div>
          <p className="font-light text-3xl text-gray-300">
            {items.description}
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.type?.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-[1.02] transition cursor-pointer"
            >
              <img
                src={project.data_image}
                alt={project.title}
                className="w-full h-100 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIAnnotation;
