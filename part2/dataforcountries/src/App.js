import React, {useState} from "react";
import CountryList from "./components/CountryList";
import axios from "axios";

const App = () => {

    const [countries, setCountries] = useState([])
    const [countriesFiltered, setCountriesFiltered] = useState([]);
    const [newFilter, setNewFilter] = useState('')

    axios
        .get('https://restcountries.com/v3.1/all')
        .then(response => {
            setCountries(response.data)
        })

    const handleSearchChange = (event) => {
        const search = event.target.value;
        setNewFilter(search);
        setCountriesFiltered(
            countries.filter(c =>
                c.name.common.toLowerCase().includes(search.toLowerCase())
            )
        );
    }


    return (
        <div className="App">
            <div>
                Find countries <input value={newFilter} onChange={handleSearchChange} />
            </div>
            <CountryList
                data={countriesFiltered}
                setFilter={setCountriesFiltered}
            />
        </div>
    );
}

export default App;
