import React from "react";

export default function DropDown() {
  return (
    <div className="dropdown">
      <select className="dropdown" name="cats" id="cats">
        <option value="all">All</option>
        <option value="bangal">Bangal</option>
        <option value="persian">Persian</option>
        <option value="siamese">Siamese</option>
      </select>
    </div>
  );
}
