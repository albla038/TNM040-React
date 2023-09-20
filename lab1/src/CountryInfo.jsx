

const CountryInfo = ({data, widthRatio, detailed}) => { //varför brackets men inte på props? Svar: om man skriver props ska det ej vara brackets. props är då parent till hela objektet
    return (
        <div className="country">
                <span className="countryName">{data.name.common} </span>{data.area} km<sup>2</sup>
            <div 
                style={{
                    width: widthRatio,
                    height: "0.5em",
                    display: "block",
                    backgroundColor: "#205da2"
                }}
            />
            {detailed == true && 
                <div>
                    <div>
                        Capital: {data.capital[0]}
                    </div>
                    <div>
                        Region: {data.subregion}
                    </div>
                </div>
            }
        </div>
    )
}

export default CountryInfo