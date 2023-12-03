import { useState } from "react";
import SearchLogo from "../assets/search-logo.svg";

export default function SearchBar({ searchCountry }) {
  const [countryName, setCountryName] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    searchCountry(countryName);
  };
  return (
    <>
      <form
        className="flex flex-row justify-items-center items-center relative bg-white rounded-xl"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          placeholder="Search country"
          className="w-full md:h-10 sm:h-8 h-7 rounded-xl border-none md:text-base sm:text-xs text-xs capitalize p-2 focus-visible:outline-none"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <img
          src={SearchLogo}
          alt=""
          className="md:h-10 md:w-10 sm:h-8 sm:w-8 h-7 w-7 absolute top-0 right-0 p-2 rounded-r-xl hover:bg-yellow-200 cursor-pointer"
          onClick={handleSearch}
        />
      </form>
    </>
  );
}
