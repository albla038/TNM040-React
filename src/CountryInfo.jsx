

const CountryInfo = ({data}) => { //varför brackets men inte på props? Svar: om man skriver props ska det ej vara brackets. props är då parent till hela objektet
    return (
        <p>
            <span className="country">{data.name.common} </span>{data.area} km<sup>2</sup>
        </p>
    )
}

export default CountryInfo