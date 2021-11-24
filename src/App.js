import './App.css';
import { useState } from 'react';
import Contact from './components/Contact/Contact';
import Data from './Data.json';

function App() {

  const [contact, setContact] = useState("");

  function getContact(ev){
    setContact(ev.target.value);
  }

  return (
    <div className="App">
      <input 
        className="search-input"
        name="search" 
        type="search" 
        placeholder="Search..." 
        onChange={getContact} 
      />
    {
      Data.filter(contacts => {
        if (contact === "") {
          return contacts;
        } else if (contacts.lastName.toLowerCase().includes(contact.toLowerCase())) {
          return contacts;
        } else if (contacts.firstName.toLowerCase().includes(contact.toLowerCase())) {
          return contacts;
        } else if (contacts.phone.includes(contact)) {
          return contacts;
        }
      }).map((contacts) => {
        return <Contact 
          key={contacts.lastName}
          firstName={contacts.firstName}
          lastName={contacts.lastName}
          phone={contacts.phone}
          gender={contacts.gender}
        />
      })
    }
    </div>
  );
}

export default App;