import './App.css';
import { Form } from './components/Form';
import { ShowInfo } from './components/ShowInfo';
import { useEffect, useState } from 'react';

function App() {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    findWeather()
  }, []);

  async function findWeather (city = 'Buenos Aires') {
    try {
      const request = await
      fetch(`http://api.weatherapi.com/v1/current.json?key=6ceaf6f68c364544bb9225624221405&q=${city}&aqi=no`)
      const json = await request.json()
      setWeather(json)
      console.log(weather)      
    } catch (error) {}
  }

  function catchCity(city) {
    setWeather(null)
    findWeather(city)

  }

  return (
    <div className="App">
      <Form sendCity={catchCity}/>
      <ShowInfo weather={weather}/>
    </div>
  );
}

export default App;
