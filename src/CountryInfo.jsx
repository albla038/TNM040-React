

const CountryInfo = ({data}) => { //varför brackets men inte på props?
    return (
        <>
        <p>
            <span className="country">{data.name.common} </span>{data.area} km<sup>2</sup>
        </p>
        </>
    )
}

export default CountryInfo