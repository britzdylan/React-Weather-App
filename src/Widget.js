import React from 'react';
import {createUseStyles} from 'react-jss'
import { FiChevronDown,FiChevronUp } from "react-icons/fi";

const styles = createUseStyles({
    container : {
        width: "300px",
        height: "483px",
        borderRadius : "18px",
        webkitBoxShadow: "5px 5px 11px 0px rgba(0,0,0,0.11)",
        mozBoxShadow: "5px 5px 11px 0px rgba(0,0,0,0.11)",
        boxShadow: "5px 5px 11px 0px rgba(0,0,0,0.11)",
        textAlign : "center",
        padding : "30px 15px",
        display: "flex",
        flexDirection : "column",
        justifyContent: "space-between"
    },
    weatherIcon : {
        width: "100px",
        margin: "0 auto"
    },
    temprature : {
        fontSize : "72px",
        fontWeight : "900",
        lineHeight : "1"
    },
    city: {
        fontSize : "14px",
        fontWeight: "600",
        lineHeight: "1"
    },
    condition : {
        fontSize: "36px",
        fontWeight: "200"
    },
    date: {
        fontSize : "14px",
        fontWeight: "600",
        lineHeight: "1"
    },
    meta : {
        fontSize: "16px",
        fontWeight : "200",
        lineHeight: "1"
    },
    metaContainer: {
        display : "flex",
        justifyContent: "space-between",
        alignItems : "start"
    },
    midContainer : {
        marginTop: "50px"
    },
    bottomContainer : {
        marginTop : "20px"
    }

})






function Widget(props) {
    const classes = styles() 
    const { data, textColour, bgColour } = props
    console.log(data);
    return (
        <div className={classes.container} style={{ backgroundColor: `${bgColour}`, color: `${textColour}`}}>
            <img className={classes.weatherIcon} alt="weather-conditions" src={`./icons/${data.weather[0].icon}@2x.png`} />
            <h1 className={classes.temprature}>{data.main.temp}</h1>
            <small className={classes.city}>{data.name}</small>
            <div className={classes.midContainer}>
                <h2 className={classes.condition}>{data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1)}</h2>
                <p className={classes.date}>{Date(data.dt).slice(0,11)}</p>
            </div>

            <div className={classes.bottomContainer}>
                <div className={classes.metaContainer}>
                    <p>Humidity: {data.main.humidity}%</p>
                    <p><FiChevronUp /> High: {data.main.temp_max}</p>
                </div>
                <hr />
                <div className={classes.metaContainer}>
                    <p>Wind: {data.wind.speed}Kph</p>
                    <p><FiChevronDown /> Low: {data.main.temp_min}</p>
                </div>
            </div>
        </div>
    )
}

export default Widget;