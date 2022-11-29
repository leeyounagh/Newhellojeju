import React, { useState } from "react";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    props.SearchHandler(searchTerm);
  };
  return (
    <div>
      <span>
        <span>
          <input
            style={{
              position: "relative",
              left: "850px",
              top: "270px",
              height: "30px",
            }}
            type="text"
            placeholder="검색.."
            onChange={(e) => {
              onChangeSearch(e);
            }}
          ></input>
        </span>
      </span>
      <div className="search-border"></div>
    </div>
  );
};

export default Search;
