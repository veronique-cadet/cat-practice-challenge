import React from "react";

export default function CatCard() {
  return (
    <div>
      {" "}
      <div className="card">
        <h2>name</h2>
        <img src="image" />
        <p>
          Score: <strong>score</strong>
        </p>
        <button className="delete">😾</button>
      </div>
    </div>
  );
}
