import React from "react";

export default function DropDown({ filterByBreed, setFilterByBreed }) {
  return (
    <div className="dropdown">
      <select
        value={filterByBreed}
        onChange={(e) => setFilterByBreed(e.target.value)}
        className="dropdown"
        name="cats"
        id="cats"
      >
        <option value="all">All</option>
        <option value="bangal">Bangal</option>
        <option value="persian">Persian</option>
        <option value="siamese">Siamese</option>
      </select>
    </div>
  );
}
