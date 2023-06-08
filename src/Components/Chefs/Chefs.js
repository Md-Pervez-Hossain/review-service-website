import React from "react";
import { FaFacebook, FaGoogle, FaLinkedinIn } from "react-icons/fa";

const Chefs = () => {
  return (
    <div>
      <section className="py-6 my-16 dark:bg-gray-800 dark:text-gray-100">
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <h3 className="text-2xl  mb-5 font-bold leading-none sm:text-5xl">
            Meet our team
          </h3>
          <p className="max-w-2xl mb-8  dark:text-gray-400">
            At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
            quam natus quis nihil quod, hic explicabo doloribus magnam neque,
            exercitationem eius sunt!
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          className="grid grid-cols-3 gap-16 "
        >
          <div>
            <div
              style={{
                backgroundImage: `url('https://scontent.fdac148-1.fna.fbcdn.net/v/t1.6435-9/50574192_2311427119101928_2797042866780635136_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE7COlh0uOPS8iYDsTdEbyfPUtN_fZEyZY9S0399kTJlqwf3E2pOSeM6s_mMywEj--RUG9IMDLfepc--xBP7qee&_nc_ohc=3f34_urx8JEAX_dFhfN&_nc_ht=scontent.fdac148-1.fna&oh=00_AfBduVQN3ReA0k7pU6ksRR7KSJCCALBNRd5ze8gqbr_EfA&oe=64A97CFF')`,
              }}
              className="bg-cover bg-center bg-no-repeat h-[300px]"
            ></div>
            <div
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h2 className="font-bold my-3">Md Pervez Hossain</h2>
              <div className="flex items-center gap-5 ">
                <FaFacebook></FaFacebook>
                <FaLinkedinIn></FaLinkedinIn>
                <FaGoogle></FaGoogle>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url('https://media.istockphoto.com/id/1165683221/photo/chef-presents-something-on-a-black-background.jpg?s=612x612&w=0&k=20&c=G3_9EIg-nt-ZKh48hlvRMYWhizVU3uQuUcoNuhOVLKM=')`,
              }}
              className="bg-cover bg-center bg-no-repeat h-[300px]"
            ></div>
            <div
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h2 className="font-bold my-3">Md Pervez Hossain</h2>
              <div className="flex items-center gap-5 ">
                <FaFacebook></FaFacebook>
                <FaLinkedinIn></FaLinkedinIn>
                <FaGoogle></FaGoogle>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: `url('https://www.shutterstock.com/image-photo/image-caucasian-male-chief-white-260nw-1310430184.jpg')`,
              }}
              className="bg-cover bg-center bg-no-repeat h-[300px]"
            ></div>
            <div
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h2 className="font-bold my-3">Md Pervez Hossain</h2>
              <div className="flex items-center gap-5 ">
                <FaFacebook></FaFacebook>
                <FaLinkedinIn></FaLinkedinIn>
                <FaGoogle></FaGoogle>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chefs;
