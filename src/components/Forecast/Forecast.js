import React, { useState} from 'react';
import Conditions from '../Conditions/Conditions';

const Forecast = () => {

let [responseObj, setResponseObj] = useState({});
let [city, setCity] = useState('');
const uriEncodedCity = encodeURIComponent(city);


    function getForecast(e){
        e.preventDefault();
        //fetch goes here

        fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?q=${uriEncodedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "ce1241679dmshdbe323b73c0dde6p1f7e5ejsn386ae855ecfa"
            }
        })
        .then(response => response.json())
        .then(response => {
            setResponseObj(response)
            console.log(response)
        })
    }
    

    return (
        <div id='input-bar'>
            <h2> Find current weather Conditions</h2>
            <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                
                <button type="submit">Get Forecast</button>
            </form>
            <Conditions 
                responseObj={responseObj}
                />
        </div>
    )
}

export default Forecast;