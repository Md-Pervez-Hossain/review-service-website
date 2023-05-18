import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const AllOrders = () => {
  //   const ordersInfo = useLoaderData();
  //   const [ordersInfo, setOrdersInfo] = useState([]);

  const [text, setText] = useState(true);
  console.log(text);
  const [ordersInfo, setOrdersInfo] = useState([]);

  const handleApprove = (order) => {
    console.log(order);
    setText(order.status);
    const agree = window.confirm(
      `Are you Sure . You Want to Approve the Order`
    );
    if (agree) {
      fetch(
        `https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/orders/${order?._id}`,
        {
          method: "PUT",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            setText(data.status);
            toast.success("Successfully Accept The Order");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-md-pervez-hossain.vercel.app/orders"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrdersInfo(data);
      })
      .catch((error) => {
        console.log(error);
        // Set loading to false in case of an error
      });
  }, [text]);

  return (
    <div className="w-9/12 mx-auto my-16">
      <h2>All ordsers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Food Name</th>
              <th>Food Id </th>
              <th>Amount</th>
              <th>Transaction Id</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ordersInfo?.map((order, idx) => {
              return (
                <>
                  <tr key={order?._id}>
                    <th>{idx + 1}</th>
                    <td>{order?.FoodsName}</td>
                    <td>{order?.FoodsId}</td>
                    <td>{order?.foodPrice} BDT</td>
                    <td>{order?.transactionId}</td>
                    <td>{`${order?.cus_add1} ${order?.cus_city} ${order?.cus_postcode}`}</td>
                    <td>{order?.cus_phone}</td>
                    <td>{order?.cus_email}</td>
                    <td>
                      {order?.status === true ? (
                        <>
                          {" "}
                          <button className="font-bold bg-green-600 px-6 py-2 text-white">
                            Approved
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleApprove(order)}
                            className="font-bold bg-red-600 px-6 py-2 text-white"
                          >
                            Pending
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
