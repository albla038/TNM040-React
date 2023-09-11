
import './App.css'
import countries from 'world-countries'
import CountryInfo from './CountryInfo.jsx'

function App() {

  //console.log("Hello world!")
  //console.log(countries)

  const sortedList = countries.filter((a) => a.name.common != "Antarctica")
                              .sort((b, c) => c.area - b.area)
                              .slice(0, 15)                        //Best practice för chained functions?

  return (
    <div>
      {sortedList.map((d) => (
        <CountryInfo key={d.cca3} data={d}/>
      ))}
    </div>
  )
}

export default App