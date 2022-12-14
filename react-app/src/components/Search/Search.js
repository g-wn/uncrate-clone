import React, { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/all_products";
import Navigation from "../Navigation/Navigation";
import "./Search.css";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  const products = useSelector((state) => Object.values(state.products));
  // const productImages = useSelector(state => Object.values(state.product_images))

  useEffect(() => {
    dispatch(getProducts());
    // dispatch(getProductImages());
  }, [dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value.toUpperCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(searchInput);
  };

  //   const finalList = [];
  const filteredJobs = useMemo(() =>
    searchValue.length > 0
      ? products.filter((job) => job.title.includes(searchValue), [searchValue])
      : []
  );

  if (!products || products.length === 0) return null;

  return (
    <div>
      <Navigation />
      <div className="search-container">
        <input className="searchbar" type="text" onChange={handleChange} />
        <button className="submit-search" onClick={handleSubmit}>
          Submit
        </button>
        {filteredJobs.length > 0
          ? filteredJobs.map((job) => <p>{job.title}</p>)
          : ""}
      </div>
    </div>
  );
}
