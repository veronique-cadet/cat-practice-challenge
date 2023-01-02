import React, { useState } from "react";
import CatCard from "./CatCard";
import DropDown from "./DropDown";
import NewCatForm from "./NewCatForm";
import SearchBar from "./SearchBar";

export default function CatContainer({ cats, setCats }) {
  const [hidden, setIsHidden] = useState(false);
  const [search, setSearch] = useState("");
  const [filterByBreed, setFilterByBreed] = useState("all");

  const searchedCats = cats.filter((cat) => {
    return cat.name.toLowerCase().includes(search.toLowerCase());
  });

  const filteredByBreedCats = searchedCats.filter((cat) => {
    if (filterByBreed === "all") return true;
    {
      return filterByBreed === cat.breed;
    }
  });

  const card = filteredByBreedCats.map((cat) => {
    return (
      <CatCard
        key={cat.id}
        cat={cat}
        cats={cats}
        id={cat.id}
        setCats={setCats}
      />
    );
  });

  return (
    <div>
      <h1 className="title">MY FAVORITE CATS 🤍</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <DropDown
        filterByBreed={filterByBreed}
        setFilterByBreed={setFilterByBreed}
      />
      {hidden ? (
        <div>
          <button onClick={() => setIsHidden(!hidden)} className="tog">
            Hide Form
          </button>
          <NewCatForm cats={cats} setCats={setCats} />
        </div>
      ) : (
        <div>
          <button onClick={() => setIsHidden(!hidden)} className="tog">
            Show Form
          </button>
        </div>
      )}
      {card}
    </div>
  );
}
