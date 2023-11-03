import axios from 'axios'
import { useEffect, useState } from 'react'

const Filter = ({value, onChange}) =>{
  return(
    <div>
      filter: <input value={value} onChange={onChange}/>
    </div>
  )
}

const PersonForm = (props) =>{
  return(
    <form onSubmit={props.onSubmit}>
        <div>
          name: <input value={props.nameValue} onChange={props.onNameChange}/>
        </div>
        <div>
          number: <input value={props.numberValue} onChange={props.onNumberChange} />
        </div>
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Persons = ({persons, searchTerm}) =>{
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const personElements = filteredPersons.map(person => (
    <p key={person.id}>{person.name} {person.number}</p>
  ));

  return (
    <div>
      {personElements}
    </div>
  );
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3002/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const addPerson = (event) =>{
    event.preventDefault()
    if(persons.filter((person) => person.name === newName).length > 0){
      alert(`${newName} is already in use`)
    }else{
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }

  const handleSearchTerm = (event) =>{
    setSearchTerm(event.target.value)
  }




  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter value={searchTerm} onChange={handleSearchTerm}/>

      <h2>Add a new</h2>

      <PersonForm onSubmit={addPerson} nameValue={newName} onNameChange={handleNameChange} numberValue={newNumber} onNumberChange={handleNumberChange}/>

      
      <h2>Numbers</h2>
      <Persons persons={persons} searchTerm={searchTerm}/>
    </div>
  )
}

export default App
