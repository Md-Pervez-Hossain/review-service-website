import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";

const CheckoutPage = () => {
  const [infoDisplay, setInfoDisplay] = useState(true);
  const { register, handleSubmit, getValues, watch, reset } = useForm();
  const serviceInfo = useLoaderData();
  console.log(serviceInfo);
  const handleGetValues = () => {
    if (watch("shippingInfo") === false) {
      setInfoDisplay(false);
    } else if (watch("shippingInfo") === true) {
      setInfoDisplay(true);
    }
  };

  const myOnSubmit = (myData) => {
    if (getValues("shippingInfo") === false) {
      myData.ship_firstName = myData.cus_firstName;
      myData.ship_lastName = myData.cus_firstName;
      myData.ship_country = myData.cus_country;
      myData.ship_add1 = myData.cus_add1;
      myData.ship_city = myData.cus_city;
      myData.ship_state = myData.cus_state;
      myData.ship_postcode = myData.cus_postcode;
    }
    setInfoDisplay(true);
    reset();
    console.log(myData);
  };

  return (
    <div className="w-9/12 mx-auto my-16">
      <form onSubmit={handleSubmit(myOnSubmit)}>
        <div className="grid md:grid-cols-2 items-center gap-5 border border-white">
          <div className=" border border-white">
            <h1 className="text-xl font-bold mb-5">Billing Details</h1>
            <>
              <div className="grid md:grid-cols-2 gap-3 !my-2">
                <input
                  {...register("cus_firstName")}
                  type="text"
                  required
                  name="cus_firstName"
                  placeholder="First Name"
                  className="input input-bordered w-full "
                />
                <input
                  {...register("cus_lastName")}
                  type="text"
                  required
                  name="cus_lastName"
                  placeholder="Last Name"
                  className="input input-bordered w-full "
                />
                <div className="form-control w-full mt-5">
                  <input
                    {...register("cus_country")}
                    type="text"
                    required
                    name="cus_country"
                    placeholder="Country / Region "
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control w-full mt-5">
                  <input
                    {...register("cus_add1")}
                    type="text"
                    required
                    name="cus_add1"
                    placeholder="Street address"
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control w-full mt-5">
                  <input
                    {...register("cus_city")}
                    type="text"
                    required
                    name="cus_city"
                    placeholder="Town / City "
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control w-full mt-5">
                  <input
                    {...register("cus_state")}
                    type="text"
                    required
                    name="cus_state"
                    placeholder="District"
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control w-full mt-5">
                  <input
                    {...register("cus_postcode")}
                    type="text"
                    required
                    name="cus_postcode"
                    placeholder="Postcode / ZIP"
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control w-full mt-5">
                  <input
                    {...register("cus_phone")}
                    type="text"
                    required
                    name="cus_phone"
                    placeholder="Phone"
                    className="input input-bordered w-full "
                  />
                </div>
              </div>
              <div className="form-control w-full mt-5">
                <input
                  {...register("cus_email")}
                  type="email"
                  required
                  name="cus_email"
                  placeholder="Email"
                  className="input input-bordered w-full "
                />
              </div>
              <div className=" mt-5">
                <input
                  onClick={handleGetValues}
                  {...register("shippingInfo")}
                  type="checkbox"
                  name="shippingInfo"
                  className=" p-6 mb-5 text-xs  bg-[#F2F2F2]"
                />
                <label htmlFor="shippingInfo" className="ml-3">
                  Ship to a different address?
                </label>
              </div>
            </>
            <div className={infoDisplay ? "hidden" : ""}>
              <div className="grid md:grid-cols-2 gap-3 !my-2">
                <input
                  {...register("ship_firstName")}
                  type="text"
                  required
                  name="ship_firstName"
                  placeholder="First Name"
                  disabled={infoDisplay}
                  className="input input-bordered w-full "
                />
                <input
                  {...register("ship_lastName")}
                  type="text"
                  required
                  name="ship_lastName"
                  placeholder="Last Name"
                  disabled={infoDisplay}
                  className="input input-bordered w-full "
                />
                <div className="form-control w-full mt-5">
                  <input
                    {...register("ship_country")}
                    type="text"
                    required
                    name="ship_country"
                    placeholder="Country / Region "
                    disabled={infoDisplay}
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control w-full mt-5">
                  <input
                    {...register("ship_add1")}
                    type="text"
                    required
                    name="ship_add1"
                    placeholder="Street address"
                    disabled={infoDisplay}
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control w-full mt-5">
                  <input
                    {...register("ship_city")}
                    type="text"
                    required
                    name="ship_city"
                    placeholder="Town / City "
                    disabled={infoDisplay}
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control w-full mt-5">
                  <input
                    {...register("ship_state")}
                    type="text"
                    required
                    name="ship_state"
                    placeholder="District"
                    disabled={infoDisplay}
                    className="input input-bordered w-full "
                  />
                </div>
                <div className="form-control w-full mt-5">
                  <input
                    {...register("ship_postcode")}
                    type="text"
                    required
                    name="ship_postcode"
                    placeholder="Postcode / ZIP"
                    disabled={infoDisplay}
                    className="input input-bordered w-full "
                  />
                </div>
              </div>
            </div>

            <div className="md:col-span-3 border border-white">
              <button className="px-6 py-4 mt-5 w-full rounded-lg bg-primary text-white font-semibold">
                Place Order
              </button>
            </div>
          </div>
          <div>
            <img src={serviceInfo?.photoURL} alt="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;
