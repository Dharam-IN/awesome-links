import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({contacts}) => {

    const renderContact = contacts.map((item)=>{
        return(
            <ContactCard contact={item}/>
        )
    })

  return (
    <div className='max-w-[1200px] mx-auto mt-6'>
        <h3 className='text-2xl'>Contact List</h3>
        {renderContact}
    </div>
  )
}

export default ContactList