import React from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";

const DashboadCommon = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let totalSell = 0;
  for (let amount of orders) {
    const totalAmount = parseInt(amount?.foodPrice);
    totalSell = totalSell + totalAmount;
  }

  return (
    <div>
      <div className="mb-5">
        <h2 className="text-2xl font-bold ">
          {user?.displayName} , Welcome To Dashboard
        </h2>
        <p>
          Food Valley is a region in the Netherlands where international food
          companies, research institutes, and Wageningen University and Research
          Centre are concentrated.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-white-lg p-5 shadow-lg">
          <h2>Total Users </h2>
          <p>{users.length}</p>
        </div>
        <div className="bg-white-lg p-5 shadow-lg">
          <h2>Total Order </h2>
          <p>{orders?.length}</p>
        </div>
        <div className="bg-white-lg p-5 shadow-lg">
          <h2>Total Sell </h2>
          <p>{totalSell} BDT </p>
        </div>
      </div>
    </div>
  );
};

export default DashboadCommon;
