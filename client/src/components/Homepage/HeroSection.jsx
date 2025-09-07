import React from "react";

function HeroSection() {
  return (
    <section className="flex flex-row items-center justify-between p-8 bg-gray-100">
      <div>
        <h1 className="text-4xl font-bold mb-4 text-blue-900">
          Welcome to My Portfolio
        </h1>
      </div>
      <div
        style={{ width: "200px", height: "200px", border: "1px solid #ccc" }}
      >
        <img
          src=""
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </section>
  );
}

export default HeroSection;
