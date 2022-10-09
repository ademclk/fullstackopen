import {useState} from "react";

const App = () => {

    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])

    const [newName, setNewName] = useState('')

    const addNote = (event) => {
        event.preventDefault();

        for (const p of persons) {
            let isPresent = p.name === newName;
            if (isPresent) {
                alert(`${newName} already exists.`)
            } else {
                const personObject = {
                    name: newName,
                }
                setPersons(persons.concat(personObject));
                setNewName('');
            }
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    return (
        <div className="App">
            <h2>Phonebook</h2>
            <form onSubmit={addNote}>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <ul>
                {persons.map(p => {
                    return <li key={p.name}>{p.name}</li>
                })}
            </ul>
        </div>
    );
}

export default App;
