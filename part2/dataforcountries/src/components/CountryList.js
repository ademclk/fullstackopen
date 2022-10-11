import React from "react";
import Detail from "./Detail"

const CountryList = ({data, setFilter}) => {

    if (data.length > 10) {
        return <h4>Too many matches, please provide more specific filter.</h4>
    } else if (data.length === 1) {
       return <Detail country = {data}/>
    } else {
        return (
            <div>
                <ul>
                    {data.map((country) => {
                        return (
                            <div key={country.name.official}>
                                <li >{country.name.common}<span> </span><button onClick={() => setFilter([country])}>show</button></li>
                            </div>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default CountryList;