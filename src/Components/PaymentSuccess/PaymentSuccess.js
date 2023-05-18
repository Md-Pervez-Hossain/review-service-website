import React from "react";
import { useLoaderData } from "react-router-dom";

const PaymentSuccess = () => {
  const foodsOrderInfo = useLoaderData();
  console.log(foodsOrderInfo);
  const { FoodsName, paidAt, transactionId, foodPrice } = foodsOrderInfo;
  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="text-2xl font-bold my-5">
        Congratulation ... SuccessFully Payment Done
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Date</th>
              <th>TransacTion Id</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{FoodsName}</td>
              <td>{paidAt}</td>
              <td>{transactionId}</td>
              <td>{foodPrice} BDT</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentSuccess;
