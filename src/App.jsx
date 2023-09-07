
import './App.css'
import countries from 'world-countries'
import CountryInfo from './CountryInfo.jsx'

function App() {

  console.log("Hello world!")
  console.log(countries)

  return (
      <div>
        <CountryInfo data={countries[0]}/>
      </div>
  )
}

export default App