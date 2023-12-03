import SearchBar from "./components/SearchBar";
import CountryCard from "./components/CountryInfoCard";
import { useState } from "react";
import Loader from "./components/Loader/Loader";
import NoResult from "./components/NoResult";

function App() {
  const [countryData, setCountryData] = useState([]);
  const [error, setError] = useState("");
  const [errorStatus, setErrorStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCountryInfo = async (countryName) => {
    if (!countryName) {
      setError("");
      setErrorStatus("");
      setCountryData([]);
      return;
    }
    try {
      setIsLoading(() => true);
      const response = await fetch(
        `http://localhost:3000/country/${countryName}`
      );
      const data = await response.json();
      setIsLoading(() => false);
      if (data.status == 500) {
        setErrorStatus("500");
        setError("Oops...Something went wrong. Please try again later!");
        setCountryData([]);
      } else if (data.status == 404) {
        setErrorStatus(data.status);
        setError(
          "Country Information Not Found. Please change the search query!"
        );
        setCountryData([]);
      } else if (data.length === 0) {
        setError("Please enter a valid country name.");
        setCountryData([]);
      } else {
        setErrorStatus("201");
        setError("");
        setCountryData(data);
      }
    } catch (error) {
      setIsLoading(() => false);
      setErrorStatus("500");
      setError("Oops...Something went wrong. Please try again later!");
      setCountryData([]);
    }
  };

  return (
    <main className="flex flex-col gap-8 max-w-3xl md:mx-auto sm:mx-32 mx-10">
      {isLoading ? <Loader /> : undefined}
      <SearchBar searchCountry={fetchCountryInfo} />
      {countryData.map((country) => {
        return <CountryCard key={country.name.official} country={country} />;
      })}
      {errorStatus == "404" ? (
        <div className="flex flex-col gap-4 items-center text-xl">
          <NoResult />
          {error}
        </div>
      ) : undefined}
      {errorStatus == "500" ? <div>{error}</div> : undefined}
    </main>
  );
}

export default App;
