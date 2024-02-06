import React from 'react'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

const App = () => {

  const contacts = [
    {
      id: "1",
      name: "Aadi",
      email: "aadi@gmail.com"
    },
    {
      id: "2",
      name: "Dharam",
      email: "dharam@gmail.com"
    }
  ]


  return (
    <>
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </>
  )
}

export default App