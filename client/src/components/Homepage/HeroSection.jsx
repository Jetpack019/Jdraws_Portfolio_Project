import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/userSlice";
function HeroSection() {
  const dispatch = useDispatch();
  const { item, isLoading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (isLoading) return <p className="text-white">Loading user...</p>;
  if (error) return <p className="text-red-500">Error loading user: {error}</p>;

  return (
    <section className="flex flex-row items-center justify-between p-8 bg-gray-100">
      {item && (
        <>
          <div>
            <h1 className="text-4xl font-bold mb-4 text-blue-900">
              {item.name}
            </h1>
          </div>
          <div
            style={{
              width: "200px",
              height: "200px",
              border: "1px solid #ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.image ? (
              <img
                src={item.image}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <span className="text-gray-500">No Image</span>
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default HeroSection;
