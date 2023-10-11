import "./App.css";
import countries from "world-countries";
import CountryInfo from "./CountryInfo.jsx";
import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";
import { useState } from "react";

function App() { // Component resposible for user routing //När ska man använda / i paths?
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="country/:cca3" element={<CountryDetails />} />
        <Route path="*" element={<h1>404. Game over dude</h1>}/>
        <Route path="country/*" element={<h1>404. No country found dude</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

function CountryDetails() {
  let { cca3 } = useParams();

  return (
    <div>
    <div>{cca3}</div>
    <Link to="/">Return</Link>
    </div>
  )
}

function CountryList() {
  const [searchString, setSearchString] = useState("");

  function changeInput(event) {
    setSearchString(event.target.value);
    console.log(searchString);
  }

  const matchSearch = country => {
    const name = country.name.common;
    const lowerCaseWord = name.toLowerCase();
    const lowerCaseSearchString = searchString.toLowerCase();

    return lowerCaseWord.indexOf(lowerCaseSearchString) === 0;
  }

  const searchedList = countries.filter(matchSearch);

  const sortedList = searchedList
    .filter((a) => a.name.common != "Antarctica")
    .sort((b, c) => c.area - b.area)
    .slice(0, 15);

  const maxArea = countries.sort((a,b) => b.area - a.area)[0].area;
  const detailedList = sortedList.slice(0, 5);
  const normalList = sortedList.slice(5, 15);
  console.log(detailedList)

  return (
    <div className="main">
      <input className="searchBar" type="text" placeholder="Search for countries..." onChange={changeInput}/>

      <div className="countryContainer">
        <div className="column">
          {detailedList &&detailedList.map((d, i) => (
            <CountryInfo
              key={d.cca3}
              data={d}
              widthRatio={(d.area / maxArea) * 100 + "%"}
              detailed={true}
            />
          ))}
        </div>
        <div className="column">
          {normalList.map((d, i) => (
            <CountryInfo
              key={d.cca3}
              data={d}
              widthRatio={(d.area / maxArea) * 100 + "%"}
              detailed={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
