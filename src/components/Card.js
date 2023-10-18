import React from "react";
import "./Card.css";
export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card m-3 bg-dark text-white"
          style={{
            width: "18rem",
            // maxHeight: "360px"
          }}
        >
          <img
            src="https://source.unsplash.com/random/300x300/?dosa"
            className="card-img-top card-food-img"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div class="container w-100">
              <select className="m-2 h-100 bg-success">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <span className="fs-5">Total Price</span>
            </div>
            <button className="btn btn-primary"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
