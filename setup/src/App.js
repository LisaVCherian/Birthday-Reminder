import React, { useState } from 'react';
import data from './data';
import List from './List';
// import Form from './Form';

function App() {
  const [people, setPeople] = useState(data);

  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const idChange = (e) => {
    setID(e.target.value);
  }

  const nameChange = (e) => {
    setName(e.target.value);
  }

  const ageChange = (e) => {
    setAge(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newdata = [...people, { id, name, age }]
    setPeople(newdata);
    setID('');
    setName('');
    setAge('');
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}> Clear all </button>
      </section>

      <section className='container'>
        <h3>Add More Birthdays!</h3>
        <form>

          <label>ID: </label>
          <input type='text' value={id} required onChange={(e) => idChange(e)} />
          <br />

          <label>Name: </label>
          <input type='text' value={name} required onChange={(e) => nameChange(e)} />
          <br />

          <label>Age: </label>
          <input type='text' value={age} required onChange={(e) => ageChange(e)} />
          <br />

          {/* <input type='submit' value="submit" onClick={(e) => handleSubmit(e)} /> */}
          <button className='btn' type='submit' value="submit" onClick={(e) => handleSubmit(e)}>Submit</button>

        </form>
      </section>
    </main>
  );
}

export default App;
