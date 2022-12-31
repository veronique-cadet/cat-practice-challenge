import React from "react";
import CatCard from "./CatCard";
import DropDown from "./DropDown";
import NewCatForm from "./NewCatForm";
import SearchBar from "./SearchBar";

export default function CatContainer() {
  return (
    <div>
      <h1 className="title">MY FAVORITE CATS 🤍</h1>
      <SearchBar />
      <DropDown />
      <button className="tog">Hide or ShowForm</button>
      <NewCatForm />
      {/* {put cats here} */}
    </div>
  );
}
