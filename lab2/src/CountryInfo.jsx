import { Link } from "react-router-dom";

const CountryInfo = ({ data, widthRatio, detailed }) => {
  const roundedArea = Math.round(data.area / 100000) / 10;

  return (
      <Link to={"/country/" + data.cca3} className="country">
        <span className="countryName">{data.name.common} </span>
        {roundedArea} million km<sup>2</sup>
        <div className="animatedBar"
          style={{
            width: widthRatio,
            height: "0.5em",
            display: "block",
            backgroundColor: "#205da2",
          }}
        ></div>
        {detailed && (
          <div>
            <div>Capital: {data.capital[0]}</div>
            <div>Region: {data.subregion}</div>
          </div>
        )}
      </Link>
  );
};

export default CountryInfo;
