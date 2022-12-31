import React from "react";

export default function CatCard({ cat, cats, id, setCats }) {
  
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/cats/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setCats(
          cats.filter((cat) => {
            return cat.id !== id;
          })
        );
      });
  };
  return (
    <div>
      {" "}
      <div className="card">
        <h2>{cat.name}</h2>
        <img src={cat.image} />
        <p>
          Score: <strong>{cat.score}</strong>
        </p>
        <button
          onClick={() => {
            handleDelete(id);
          }}
          className="delete"
        >
          😾
        </button>
      </div>
    </div>
  );
}
