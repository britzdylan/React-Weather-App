import React from 'react';
import {createUseStyles} from 'react-jss'


const styles = createUseStyles({

    input : {
        padding: "8px 16px",
        margin: "15px 0",
        width: "100%",
        display: "block",
        borderRadius: "4px"
    },
    label : {
        fontSize : "32px",
        fontWeight : "200",
        textAlign : "center"
    },
    submit : {
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



function Input({ city, changeCity, submitCity}) {
    const classes = styles()

    

    return (
        <div>
            <label className={classes.label} htmlFor="city">Choose your city</label>
            <input onChange={(e) => changeCity(e)} className={classes.input} type="text" value={city} id="city" name="city" placeholder="San Francisco" />
            <button className={classes.submit} onClick={submitCity}>Submit</button>
        </div>
    )
}

export default Input