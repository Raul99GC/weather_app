import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [latlon, setLatlon] = useState({})
  const [weather, setWeather] = useState()

  useEffect(() => {

    const success = pos => {
      console.log(pos)
      const lat = pos.coords.latitude
      const lon = pos.coords.longitude
      setLatlon({lat, lon})
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {

    if (latlon.lat !== undefined) {

      const API_KEY = 'df531716f11437e6e4d536a41769713d'

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${API_KEY}`

      axios.get(url)
        .then(res => setWeather(res.data))
        .catch(err => console.log('error de aja ', err))
    }

  }, [latlon])

  return (
    <div className="App">
      <h1>hola</h1>
    </div>
  )
}

export default App
