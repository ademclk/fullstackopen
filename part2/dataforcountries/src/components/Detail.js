import React from "react";
import WeatherForecast from "./WeatherForecast";

const Detail = ({country}) => {
    let languagesArray = [];
    for (const [, value] of Object.entries(country[0].languages)) {
        languagesArray.push(value);
    }
    return (
        <div>
            <h2>{country[0].name.common}</h2>
            <p>Capital {country[0].capital}</p>
            <p>Area {country[0].area}</p>

            <h4>languages: </h4>
            <ul>
                {languagesArray.map((lang, index) => {
                    return (
                        <div key={index}>
                            <li>{lang}</li>
                        </div>
                    )
                })}
            </ul>
            <div>
                <img src={country[0].flags.png} alt={`${country[0].name.common}`}/>
            </div>
            <WeatherForecast city={country[0].capital}/>
        </div>
    );
}

export default Detail;