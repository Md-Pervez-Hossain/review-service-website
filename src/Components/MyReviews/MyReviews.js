import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyRevies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviewss?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyRevies(data);
      });
  }, [user?.email, setMyRevies]);

  return (
    <div>
      <h2>my reviews :{myReviews.length}</h2>
    </div>
  );
};

export default MyReviews;
