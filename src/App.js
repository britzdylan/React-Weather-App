import React from 'react';
import './App.css';

const cityName = 'Johannesburg'
const key = '445bff9b055f0d3a903ee2016766b598'
let weatherData = []

fetch("https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=445bff9b055f0d3a903ee2016766b598&units=metric")
    .then(response => weatherData = response.json())
    .then(data => console.log(data));


function App({ weatherData }) {
 
  console.log(weatherData);
  

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
