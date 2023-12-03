import { useState } from "react";

export default function CountryCard({ country }) {
  const [expandCard, setExpandCard] = useState(false);

  const handleExpandCard = () => {
    setExpandCard((currExpandCard) => !currExpandCard);
  };

  return (
    <>
      <div
        className={`w-full max-h-36 mb-5 bg-amber-100 p-4 b rounded-md cursor-pointer shadow-xl overflow-hidden card hover:bg-amber-200 ${
          expandCard ? "expand" : ""
        }`}
        onClick={handleExpandCard}
      >
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
          <div className="col-span-1 text-center">
            <img
              src={country.flags.png}
              alt="Country flag"
              className="flag-image"
            />
          </div>
          <div className="md:col-span-3 sm:col-span-2 col-span-1">
            <div className="flex flex-col gap-4">
              <div className="row-span-1">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <label className="font-bold text-sm">Country Name:</label>
                    <p className="text-sm text-slate-700">
                      {country.name.common}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">Official Name:</label>
                    <p className="text-sm text-slate-700">
                      {country.name.official}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">Capital:</label>
                    <p className="text-sm text-slate-700">
                      {country.capital ? country.capital.join(", ") : "N/A"}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">Continent:</label>
                    <p className="text-sm text-slate-700">
                      {country.continents.join(", ")}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">Region:</label>
                    <p className="text-sm text-slate-700">{country.region}</p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">Subregion:</label>
                    <p className="text-sm text-slate-700">
                      {country.subregion}
                    </p>
                  </div>
                </div>
              </div>
              {/* <>Using below and classes code to hide the content as the card as fixed height and some contries might has longer data</> */}
              <div
                className={`flex flex-col gap-4 ${
                  expandCard ? "show-content" : "hide-content"
                }`}
              >
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                  <div className="col-span-1">
                    <label className="font-bold text-sm">Languages:</label>
                    <p className="text-sm text-slate-700">
                      {country.languages
                        ? Object.values(country.languages)
                            .toString()
                            .split(",")
                            .join(", ")
                        : "N/A"}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">Population:</label>
                    <p className="text-sm text-slate-700">
                      {country.population}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">Currencies:</label>
                    <p className="text-sm text-slate-700">
                      {country.currencies != null &&
                      country.currencies != undefined
                        ? `${
                            country.currencies[
                              Object.keys(country.currencies)[0]
                            ].name
                          } - `
                        : "N/A"}
                      {country.currencies != null &&
                      country.currencies != undefined
                        ? Object.keys(country.currencies)[0]
                        : ""}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">Calling Code:</label>
                    <p className="text-sm text-slate-700">
                      {country.idd.root}
                      {country.idd.suffixes && country.idd.suffixes.length > 0
                        ? country.idd.suffixes[0]
                        : ""}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">Area:</label>
                    <p className="text-sm text-slate-700">{country.area}</p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">Borders:</label>
                    <p className="text-sm text-slate-700">
                      {country.borders
                        ? Object.values(country.borders)
                            .toString()
                            .split(",")
                            .join(", ")
                        : "NAN"}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">Timezone:</label>
                    <p className="text-sm text-slate-700">
                      {Object.values(country.timezones)
                        .toString()
                        .split(",")
                        .join(", ")}{" "}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">
                      Country Latitude:
                    </label>
                    <p className="text-sm text-slate-700">
                      {country.latlng[0]}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">
                      Country Longitude:
                    </label>
                    <p className="text-sm text-slate-700">
                      {country.latlng[1]}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">ISO 3166 Code:</label>
                    <p className="text-sm text-slate-700">{country.cca2}</p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">
                      Capital Latitude:
                    </label>
                    <p className="text-sm text-slate-700">
                      {country.capitalInfo.latlng
                        ? country.capitalInfo.latlng[0]
                        : "N/A"}
                    </p>
                  </div>
                  <div className="col-span-1">
                    <label className="font-bold text-sm">
                      Capital Longitude:
                    </label>
                    <p className="text-sm text-slate-700">
                      {country.capitalInfo.latlng
                        ? country.capitalInfo.latlng[1]
                        : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
