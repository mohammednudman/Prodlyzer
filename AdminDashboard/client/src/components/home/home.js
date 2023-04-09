import Navbar from "../navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../cards/cards.css";

const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/api/");

    // const jsonData = await JSON.parse(response.data);

    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <Card data={data} />
    </div>
  );
};

const DynamicCard = ({ product, clicks, total }) => {
  const [progress, setProgress] = useState(clicks);

  return (
    <div className="dynamic-card-container" style={{ display: "flex" }}>
      <div className="card-header">
        <h3>{product}</h3>
      </div>
      <div className="card-body">
        <CircularProgressbar
          value={clicks}
          maxValue={total}
          text={`${progress} Clicks`}
          styles={{
            path: {
              stroke: `#000000`,
              strokeLinecap: "butt",
              transition: "stroke-dashoffset 0.5s ease 0s",
            },
            trail: {
              stroke: "#f2f2f2",
              strokeLinecap: "butt",
            },
            text: {
              fill: "#00bcd4",
              fontSize: "20px",
              fontWeight: "bold",
            },
            background: {
              fill: "#000000",
            },
          }}
        />
      </div>
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div className="dynamic-cards-container">
      {data.map((product) => (
        <DynamicCard
          key={product._id}
          product={product._id}
          clicks={product.total_unique_clicks}
          total={product.total_clicks}
        />
      ))}
    </div>
  );
};

export default Home;
