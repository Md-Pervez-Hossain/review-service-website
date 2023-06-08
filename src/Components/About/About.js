import React from "react";

function About() {
  return (
    <div className="about-us">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div
          className="about-us-image"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <img
            src="https://advice.hosco.com/wp-content/uploads/2021/10/Untitled-design-29.png"
            alt="About Us"
          />
        </div>
        <div
          className="about-us-text"
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h2 className="mb-3">About Us</h2>
          <p>
            Welcome to our website! We are a team of passionate individuals
            dedicated to providing high-quality products/services to our
            customers.
          </p>
          <p>
            Our mission is to exceed customer expectations and deliver
            innovative solutions that address their needs. With years of
            experience in the industry,
          </p>
          <p>
            Feel free to explore our website and learn more about our company
            and the products/services we offer. If you have any questions or
            inquiries, don't hesitate to contact us. We look forward to serving
            you!
          </p>
          <button className="bg-red-600 px-6 py-3 text-white mt-5">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
