import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const [clientList, setClientList] = useState([]);
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [currentCourtCode, setCurrentCourtCode] = useState('');
  const [subject, setSubject] = useState('');  

  useEffect(() => {
      clientList.length > 0 && console.log(clientList);
  }, [clientList]);  

  const currentCourtCodeHandler = (e) => {
    setCurrentCourtCode(e.target.value);
  }

  const nameHandler = (e) => {
    setName(e.target.value);
  }

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  }

  const subjectHandler = (e) => {
    setSubject(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    checkIsClientExistBasedOnCourtCode();
  }

  const checkIsClientExistBasedOnCourtCode = () => {

      const isMatch = clientList.some(client => client.currentCourtCode === currentCourtCode);

      console.log(isMatch);

      if (isMatch) {

        const updatedSubjects = clientList.map(client => {
            if (client.currentCourtCode === currentCourtCode && client.name !== name && client.lastName !== lastName) {
                // Add the new subject to the client's existing subjects
                return { ...client, subject: [...client.subject, subject] };
            }
            return client;
        });

        // Update the isClient state with the modified data
        setClientList(updatedSubjects);
        return;
      }

      setClientList(prevState => [...prevState, { name: name, lastName: lastName, currentCourtCode: currentCourtCode, subject: subject }]);
      
  }

  return (
    <div className="App">
      <SearchBar clientList={clientList} />
      <form onSubmit={handleFormSubmit}>
        <label>Ime:
          <input onChange={nameHandler} type="text" value={name} />
        </label>
        <label>Prezime:
          <input onChange={lastNameHandler} type="text" value={lastName} />
        </label>
        <label>Sudska sifra:
          <input onChange={currentCourtCodeHandler} type="text" />
        </label>
        <label>Predmet:
          <input onChange={subjectHandler} type="text" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
