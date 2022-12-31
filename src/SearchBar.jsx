import React from "react";

export default function SearchBar() {
  return (
    <div>
      {" "}
      <form id="form">
        <input type="text" id="query" name="q" placeholder="Search..." />
      </form>
    </div>
  );
}
