

const CountryInfo = ({data, widthRatio, detailed}) => { //varför brackets men inte på props? Svar: om man skriver props ska det ej vara brackets. props är då parent till hela objektet
    return (
        <div>
            <p>
                <span className="country">{data.name.common} </span>{data.area} km<sup>2</sup>
            </p>
            {detailed == true && 
                <div>
                    <p>
                        Capital: {data.capital[0]}
                    </p>
                    <p>
                        Region: {data.subregion}
                    </p>
                </div>
            }
            <div 
                style={{
                    width: widthRatio,
                    height: "0.5em",
                    display: "inline-block",
                    backgroundColor: "blue"
                }}
            />
        </div>
    )
}

export default CountryInfo