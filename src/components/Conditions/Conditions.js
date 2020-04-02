import React from 'react';

const conditions = (props) => {
    let htmlBody;
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let today = days[new Date().getDay()];
    
    let i;
    let counter = 0;
    let day0 = [];
    let day1 = [];
    let day2 = [];
    let day3 = [];
    let day4 = [];

    if (props.responseObj.cod === "200") {
        day0.push(props.responseObj.list[0]);
        
        for(i=1; i<props.responseObj.list.length; i++){
            if(days[new Date(props.responseObj.list[i].dt_txt).getDay()] != days[new Date(props.responseObj.list[i-1].dt_txt).getDay()] ){
                counter++;
                switch(counter){
                    case 1:
                        day1.push(props.responseObj.list[i]);
                            break;
                    case 2:
                        day2.push(props.responseObj.list[i]);
                            break;
                    case 3:
                        day3.push(props.responseObj.list[i]);
                            break;
                    case 4:
                        day4.push(props.responseObj.list[i]);
                            break;
                }
            }
            else{
                switch(counter){
                    case 0:
                        day0.push(props.responseObj.list[i]);
                            break;
                    case 1:
                        day1.push(props.responseObj.list[i]);
                            break;
                    case 2:
                        day2.push(props.responseObj.list[i]);
                            break;
                    case 3:
                        day3.push(props.responseObj.list[i]);
                            break;
                    case 4:
                        day4.push(props.responseObj.list[i]);
                            break;
                }
            }
        }
        htmlBody = 
        <div className='container'>
        <div id='card-1'>
            <p><h1>NOW {Math.round(day0[0].main.temp - 273.15) } °C</h1></p>
            <h3>{day0[0].weather[0].description}</h3>
        </div>
        <div id='card-2'>
        <p><strong>Today</strong></p>
            {day0.slice(1).map(day => (
                <div>
                    <p>{new Date(day.dt_txt).getHours()} : 00, {Math.round(day.main.temp - 273.15)} °C and {day.weather[0].description}.</p>
                </div>
            ))}
        </div>

        <div id='card-3'>
        <p><strong>{days[new Date(day1[0].dt_txt).getDay()]}</strong></p>
            {day1.map(day => (
                <div>
                     <p>{new Date(day.dt_txt).getHours()} : 00, {Math.round(day.main.temp - 273.15)} °C and {day.weather[0].description}.</p>
                </div>
            ))}
        </div>

        <div id='card-4'>
        <p><strong>{days[new Date(day2[0].dt_txt).getDay()]}</strong></p>
        {day2.map(day => (
            <div>
                 <p>{new Date(day.dt_txt).getHours()} : 00, {Math.round(day.main.temp - 273.15)} °C and {day.weather[0].description}.</p>
            </div>
        ))}
        </div>
  
        <div id='card-5'>
        <p><strong>{days[new Date(day3[0].dt_txt).getDay()]}</strong></p>
        {day3.map(day => (
            <div>
                 <p>{new Date(day.dt_txt).getHours()} : 00, {Math.round(day.main.temp - 273.15)} °C and {day.weather[0].description}.</p>
            </div>
        ))}
        </div>
 
        <div id='card-6'>
        <p><strong>{days[new Date(day4[0].dt_txt).getDay()]}</strong></p>
        {day4.map(day => (
            <div>
                 <p>{new Date(day.dt_txt).getHours()} : 00, {Math.round(day.main.temp - 273.15)} °C and {day.weather[0].description}.</p>
            </div>
        ))}
        </div>
        </div>
    } else {
        htmlBody = null;
    }
    
    return (
        htmlBody
    );
    
}

export default conditions;