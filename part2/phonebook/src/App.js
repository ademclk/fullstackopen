import {useState} from "react";

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
                return alert(`${newName} already exists.`);
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
            return 0;
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
                    <input
                        value={newFilter}
                        onChange={handleFilterChange}
                    />
                </h4>
            <h2>Add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    phone:
                    <input
                        value={newPhone}
                        onChange={handlePhoneChange}
                    />
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {filteredPersons.map(p => {
                    return <li key={p.name}>{p.name} {p.phone}</li>
                })}
            </ul>
        </div>
    );
}

export default App;
