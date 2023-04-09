import React, { useState, useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./cards.css";

const DynamicCard = ({ product, ecom, clicks, total }) => {
  const [progress, setProgress] = useState(clicks);

  return (
    <div className="dynamic-card-container" style={{ display: "flex" }}>
      <div className="card-header">
        <h3>{product}</h3>
        <h3>{ecom}</h3>
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

export default function DynamicCards({ data }) {
  return (
    <div
      className="dynamic-cards-container"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {data.map((product) => (
        <DynamicCard
          key={product._id}
          product={product.product_name}
          ecom={product.ecommerce_name}
          clicks={product.no_of_clicks}
          total={product.total_clicks}
        />
      ))}
    </div>
  );
}
