import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div>
      {" "}
      <form id="form">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          id="query"
          name="q"
          placeholder="Search..."
        />
      </form>
    </div>
  );
}
