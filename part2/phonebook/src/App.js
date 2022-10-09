import {useState} from "react";

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'

const App = () => {

    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', phone: '040-123456', id: 1 },
        { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
    ])

    const [newName, setNewName] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newFilter, setNewFilter] = useState('')

    const addPerson = (event) => {
        event.preventDefault();
        let isPresent = false;
        for (let i = 0; i < persons.length; i++) {
            if (persons[i].name === newName) {
                isPresent = true;
            }
        }

        if (!isPresent) {
            const personObject = {
                name: newName,
                phone: newPhone
            }
            setPersons(persons.concat(personObject));
            setNewName('');
            setNewPhone('');
        }
        else {
            setNewName('');
            setNewPhone('');
            return alert(`${newName} already exists.`);
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    const  handleFilterChange = (event) => {
        setNewFilter(event.target.value)
    }

    const filteredPersons = persons.filter(p => {
        return p.name.toLowerCase().includes(newFilter.toLowerCase());
    })

    return (
        <div className="App">
            <h2>Phonebook</h2>
                <h4>Filter shown with <span> </span>
                   <Filter
                       filter={newFilter}
                       filterHandler={handleFilterChange}
                   />
                </h4>
            <h2>Add a new</h2>
                <PersonForm
                    submit={addPerson}
                    nameValue={newName}
                    phoneValue={newPhone}
                    nameHandler={handleNameChange}
                    phoneHandler={handlePhoneChange}
                />
            <h2>Numbers</h2>
            <ul>
                <PersonList
                    persons={filteredPersons}
                />
            </ul>
        </div>
    );
}

export default App;
