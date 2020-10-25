import React, { useState , useEffect } from 'react';
import {createUseStyles} from 'react-jss'
import Input from './input';
import Widget from './Widget'



const styles = createUseStyles({
  bg : {
    padding: "0",
    margin : "0",
    backgroundColor: "grey",
    bacgroundRepeat : "no-repeat",
    backgroundPosition: "right",
    backgroundSize : "cover",
    width : "100vw",
    height : "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  button : {
    display: "block",
    padding: "6px 12px",
    margin : "10px 0",
    fontWeight : "200",
    fontSize: "18px",
    backgroundColor : "#131313",
    color : "white",
    borderRadius : "4px",
    cursor : "pointer",
    "&:hover" : {
        backgroundColor: "white",
        color : "#131313"
    }
}
})

  
const dateNow = new Date() //get users date
const hours = dateNow.getHours() //get the hours of the current time

//set defual values
let bgImg = "day"
let bgColour = "white"
let textColour = "#131313"

//do a check to see if the app needs to run the darkmode or light mode 
if (hours > 18 || hours < 6) {
        bgColour = "#131313"
        textColour = "white"
        bgImg = "night"
    } else {
        bgColour = "white"
        textColour = "#131313"
        bgImg = "day"
    }

function App() {
  const classes = styles() //call styles

  //set hooks
  const [city, setCity] = useState(localStorage.getItem('city'));
  const [data, setData] = useState(null);


  function changeCity(e) { //change functio for the input to assign the value to city using hooks
    setCity(e.target.value)
}


//function to submit the users city
async function submitCity() {
  localStorage.setItem('city', city)

  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=445bff9b055f0d3a903ee2016766b598&units=metric`)
  .then(response => {if (response.ok) return response.json();
    throw response;
  })
  .then(json => {
    setData(json)
    console.log(json, 'json');
  })
      
}

function removeCity() {
  setCity("")
  localStorage.removeItem('city')
  window.location.reload();
}


//get the initial data 
  useEffect(() => { 
    if (localStorage.getItem('city') === null) { //check weather a city exist in local storage
      return null
    } else { //if the city does exist get the data
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=445bff9b055f0d3a903ee2016766b598&units=metric`)
        .then(response => {if (response.ok) return response.json();
          throw response; //if the response is ok throw
        })
        .then(json => {
          setData(json) //set the received data with setState hooks
        })
    }
    
  }, [city])

if (data === null) { // if no city exists return the input
  return (
    <div style={{backgroundImage: `url('/bg/${bgImg}.svg')`}} className={classes.bg}>
      <Input city={city} changeCity={changeCity} submitCity={submitCity} />
    </div>
  )
}
return ( //if the city exist render the weather widget
    <div style={{backgroundImage: `url('/bg/${bgImg}.svg')`}} className={classes.bg}>
      <Widget data={data} bgColour={bgColour} textColour={textColour} />
      <button className={classes.button} onClick={removeCity}>Change City</button> 
    </div>
  );
}

export default App;
