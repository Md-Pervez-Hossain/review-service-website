import React from "react";

const HeroBanner = () => {
  return (
    <div className="grid md:grid-cols-2 items-center gap-16">
      <div>
        <span>Our Brnad Food</span>
        <h2 className="md:text-4xl text-2xl mb-5 mt-2 font-bold leading-relaxed">
          My Tasty and <span className="text-red-600">Delicious</span> Foods
        </h2>
        <p className=" mb-5">
          Food is any substance consumed by an organism for nutritional support.
          Food is usually of plant, animal, or fungal origin, and contains
          essential nutrients, such as carbohydrates, fats, proteins, vitamins,
          or minerals.
        </p>
        <button className="bg-red-600 font-bold text-xl px-6 py-3 text-white">
          Learn More
        </button>
      </div>
      <div
        style={{
          backgroundImage: `url("https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669538jccuo.png")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "400px",
        }}
      ></div>
    </div>
  );
};

export default HeroBanner;
