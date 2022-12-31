import React from "react";

export default function NewCatForm() {
  return (
    <div className="formDiv">
      <form className="newform">
        <label>Name:</label>
        <input></input>
        <label>Breed:</label>
        <input></input>
        <label>Image:</label>
        <input></input>
        <label>Score:</label>
        <input></input>
        <button id="tog">Add New Cat!</button>
      </form>
    </div>
  );
}
