import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const CheckoutPage = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
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
      myData.ship_name = myData.cus_name;
      myData.ship_email = myData.cus_email;
      myData.ship_country = myData.cus_country;
      myData.ship_add1 = myData.cus_add1;
      myData.ship_city = myData.cus_city;
      myData.ship_state = myData.cus_state;
      myData.ship_postcode = myData.cus_postcode;
    }
    const date = new Date().toLocaleDateString();
    const FoodsId = serviceInfo?._id;
    const FoodsName = serviceInfo?.foodName;
    const foodPrice = serviceInfo?.foodPrice;
    setInfoDisplay(true);
    reset();
    // console.log(myData);
    const ordersInfo = {
      ...myData,
      date,
      FoodsId,
      FoodsName,
      foodPrice,
      status: false,
    };
    console.log(ordersInfo);

    fetch(
      "https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/orders",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(ordersInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.replace(data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="grid md:grid-cols-2 items-center gap-16 border border-white">
        <div>
          <form onSubmit={handleSubmit(myOnSubmit)}>
            <div>
              <div className=" border border-white">
                <h1 className="text-xl font-bold mb-2">Billing Details</h1>
                <>
                  <div className="grid md:grid-cols-2 gap-3 !my-2">
                    <div className="form-control w-full mt-5">
                      <input
                        {...register("cus_name")}
                        type="text"
                        required
                        name="cus_name"
                        placeholder="First Name"
                        defaultValue={user?.displayName}
                        className="input input-bordered w-full "
                      />
                    </div>
                    <div className="form-control w-full mt-5">
                      <input
                        {...register("cus_email")}
                        type="email"
                        required
                        name="cus_email"
                        placeholder="Email"
                        defaultValue={user?.email}
                        className="input input-bordered w-full "
                      />
                    </div>

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
                    <div className="form-control w-full mt-5">
                      <input
                        {...register("ship_name")}
                        type="text"
                        required
                        name="ship_name"
                        placeholder="First Name"
                        defaultValue={user?.displayName}
                        disabled={infoDisplay}
                        className="input input-bordered w-full "
                      />
                    </div>
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
                  <button className="px-6 py-4 mt-5 w-full rounded-lg bg-red-600 text-white font-semibold">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div>
          <div>
            <div
              style={{
                backgroundImage: `url(${serviceInfo?.photoURL})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "400px",
              }}
            ></div>
            <div>
              <h2 className="mt-5 mb-2 text-2xl font-bold">
                {serviceInfo?.foodName}
              </h2>
              <h2 className="font-bold">
                Price :{" "}
                <span className="font-normal">{`${serviceInfo?.foodPrice}   BDT`}</span>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
