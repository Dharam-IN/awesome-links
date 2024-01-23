import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Addcontact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {

  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact)=>{
    console.log(contact)
    setContacts([...contact, contact])
  }
 
  return (
    <>
      <div className="ui container">
        <Header/>
        <Addcontact addContactHandler={addContactHandler}/>
        <ContactList contacts={contacts}/>
      </div>
    </>
  );
}

export default App;
