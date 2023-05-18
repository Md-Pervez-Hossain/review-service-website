import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/orders/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyOrders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);

  let totalAmount = 0;
  for (const amount of myOrders) {
    console.log(amount);
    const totalExpense = parseInt(amount?.foodPrice);
    totalAmount = totalAmount + totalExpense;
  }

  return (
    <div className=" w-9/12 mx-auto my-16">
      <h2>My Orders : {myOrders?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Food Name</th>
              <th>Transaction Id</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              {/* <th>Update Orders</th> */}
            </tr>
          </thead>
          <tbody>
            {myOrders?.map((order, idx) => {
              return (
                <>
                  <tr>
                    <th>{idx + 1}</th>
                    <td>{order?.FoodsName}</td>
                    <td>{order?.transactionId}</td>
                    <td>{order?.foodPrice}</td>
                    <td>{order?.paidAt}</td>
                    <td>
                      {order?.status === false ? (
                        <>
                          <button className="font-bold bg-red-600 px-6 py-2 text-white">
                            Pending
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="font-bold bg-green-600 px-6 py-2 text-white">
                            Approved
                          </button>
                        </>
                      )}
                    </td>
                    {/* <td>
                      {order?.status === false ? (
                        <>
                          <button className="font-bold bg-green-600 px-6 py-2 text-white">
                            <FaTrash className="inline-block mb-1 mr-1"></FaTrash>
                            <span>Cancel Order</span>
                          </button>
                        </>
                      ) : (
                        <>
                          <p>Order Approved , you Can't Cancle The Order</p>
                        </>
                      )}
                    </td> */}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <hr></hr>
        <div className="flex items-center justify-end mr-[365px] mt-5">
          <p>Total Amount : {totalAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
