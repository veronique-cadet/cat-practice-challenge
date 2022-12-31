import React, { useState } from "react";

export default function NewCatForm({ cats, setCats }) {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [image, setImage] = useState("");
  const [score, setScore] = useState("");

  const newCat = {
    name: name,
    breed: breed,
    image: image,
    score: score,
  };

  const handleSubmit = () => {
    fetch("http://localhost:3001/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCat),
    })
      .then((response) => response.json())
      .then(() => {
        setCats([...cats, newCat]);
      });
  };

  return (
    <div className="formDiv">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
          setName("");
          setBreed("");
          setImage("");
          setScore("");
        }}
        className="newform"
      >
        <label>Name:</label>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <label>Breed:</label>
        <input value={breed} onChange={(e) => setBreed(e.target.value)}></input>
        <label>Image:</label>
        <input value={image} onChange={(e) => setImage(e.target.value)}></input>
        <label>Score:</label>
        <input value={score} onChange={(e) => setScore(e.target.value)}></input>
        <button id="tog">Add New Cat!</button>
      </form>
    </div>
  );
}
