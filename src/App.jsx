
import './App.css'
import countries from 'world-countries'
import CountryInfo from './CountryInfo.jsx'

function App() {

  //console.log("Hello world!")
  //console.log(countries)

  const sortedList = countries.filter((a) => a.name.common != "Antarctica")
                              .sort((b, c) => c.area - b.area)
                              .slice(0, 15)                        //Best practice för chained functions?

  const maxArea = sortedList[0].area

  return (
    <div>
      {sortedList.map((d, i) => (
        <CountryInfo key={d.cca3} data={d} widthRatio={(d.area/maxArea)*100*4 + "%"} detailed={i < 5}/>
      ))}
    </div>
    
  )
}

export default App