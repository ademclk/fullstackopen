import React from "react";

const CountryList = ({data}) => {
    if (data.length > 10) {
        return <h4>Too many matches, please provide more specific filter.</h4>
    } else if (data.length === 1) {
        let languagesArray = [];
        for (const [ , value] of Object.entries(data[0].languages)) {
            languagesArray.push(value);
        }
        return (
            <div>
                <h2>{data[0].name.common}</h2>
                <p>Capital {data[0].capital}</p>
                <p>Area {data[0].area}</p>

                <h4>languages: </h4>
                <ul>
                    {languagesArray.map(lang => {
                        return <li>{lang}</li>
                    })}
                </ul>
                <div>
                    <img src={data[0].flags.png} alt={`${data[0].name.common}`} />
                </div>
            </div>

        );
    } else {
        return (
            <div>
                <ul>
                    {data.map((country, index) => {
                        return <li key={index}>{country.name.common}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default CountryList;