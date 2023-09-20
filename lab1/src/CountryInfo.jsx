const CountryInfo = ({ data, widthRatio, detailed }) => {
  const roundedArea = Math.round(data.area / 100000) / 10;

  return (
    <div className="country">
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
    </div>
  );
};

export default CountryInfo;
