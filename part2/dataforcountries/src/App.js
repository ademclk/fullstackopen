import React, {useState} from "react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
import axios from "axios";

const App = () => {

    const [countries, setCountries] = useState([])
    const [newFilter, setNewFilter] = useState('')

    axios
        .get('https://restcountries.com/v3.1/all')
        .then(response => {
            setCountries(response.data)
        })

    const handleSearchChange = (event) => {
        setNewFilter(event.target.value)
    }

    const filteredCountries = countries.filter(c => {
        return c.name.common.toLowerCase().includes(newFilter.toLowerCase());
    })

    return (
        <div className="App">
            <SearchBar
                filter={newFilter}
                eventHandler={handleSearchChange}
            />
            <CountryList
                data={filteredCountries}
            />
        </div>
    );
}

export default App;
