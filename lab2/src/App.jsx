import "./App.css";
import countries from "world-countries";
import CountryInfo from "./CountryInfo.jsx";

function App() {
  const sortedList = countries
    .filter((a) => a.name.common != "Antarctica")
    .sort((b, c) => c.area - b.area)
    .slice(0, 15);

  const maxArea = sortedList[0].area;
  const detailedList = sortedList.slice(0, 5);
  const normalList = sortedList.slice(5, 15);

  return (
    <div className="countryContainer">
      <div className="column">
        {detailedList.map((d, i) => (
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
  );
}

export default App;
