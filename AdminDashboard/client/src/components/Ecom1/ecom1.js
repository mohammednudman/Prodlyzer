import DynamicCards from "../cards/cards";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../navbar";
const Ecom1 = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/api/ecom1");

    // const jsonData = await JSON.parse(response.data);

    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <DynamicCards data={data} />
    </div>
  );
};

export default Ecom1;
