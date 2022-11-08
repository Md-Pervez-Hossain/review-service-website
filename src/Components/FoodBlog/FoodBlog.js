import React from "react";

const FoodBlog = () => {
  return (
    <div>
      <h2 className="md:text-7xl text-4xl font-bold text-center capitalize my-16">
        Upcomming Food
      </h2>
      <section className="p-4 lg:p-8 bg-yellow-300 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto space-y-12">
          <div className="flex flex-col mb-10 border-none overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img
              src="https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/aloo-paratha-recipe.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <h3 className="text-3xl font-bold">Aloo paratha</h3>
              <p className="my-6 dark:text-gray-400">
                Aloo paratha is a paratha stuffed with potato, originating from
                the Punjab region of South Asia. It is traditionally eaten for
                breakfast. It is made using unleavened dough rolled with a
                mixture of mashed potato and spices which is cooked on a hot
                tawa with butter or ghee
              </p>
              <button className="bg-red-600 font-bold text-xl w-32 px-5 py-3 my-3 text-white">
                Details
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-10 border-none overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
            <img
              src="https://www.simplyrecipes.com/thmb/m1LB58rp40jNA5L7_6O3IJkj4Cc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-BBQ-Chicken-LEAD-10-03fd9892eaae4ce1a8a3f4c949657cfd.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
              <h3 className="text-3xl font-bold">Grilled chicken</h3>
              <p className="my-6 dark:text-gray-400">
                Grilled chicken can be a quick and healthy way to boost your
                protein intake. Consider throwing some vegetables onto the grill
                to help round out your meal. Baked chicken. Baking your chicken
                is a great weeknight dinner option, especially if you're trying
                to lose weight.
              </p>
              <button className="bg-red-600 font-bold text-xl w-32 px-5 py-3 my-3 text-white">
                Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodBlog;
