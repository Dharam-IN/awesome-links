import React from 'react'
import { FaTrash } from "react-icons/fa6";

const ContactCard = ({contact}) => {
  return (
    <>
        <div className='flex items-center justify-between border px-3 py-2 mb-4'>
            <div className='flex flex-col'>
                <div className=''>{contact.name}</div>
                <div>{contact.email}</div>
            </div>
            <FaTrash className='cursor-pointer hover:text-red-500'/>
        </div>
    </>
  )
}

export default ContactCard