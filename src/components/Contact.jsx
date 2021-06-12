import React from 'react'
import { useCustomer } from '../context/CustomerContext'

const Contact = () => {
    const [contact, setContact] = React.useState('')
    const [message, setMessage] = React.useState('')

    const handleContactChange = event => {
        setContact(event.target.value)
    }

    const handleMessageChange = e => {
        setMessage(e.target.value.toString().toUpperCase())
    }

    return (
        <div>
            Contact
            <label>
                Enter Contact Number:{' '}
                <input
                    type='number'
                    value={contact}
                    placeholder='Input Number'
                    onChange={handleContactChange}
                />
            </label>
            <label>
                Enter Contact Message:{' '}
                <input
                    type='text'
                    value={message}
                    placeholder='Input Message'
                    onChange={handleMessageChange}
                />
            </label>{' '}
        </div>
    )
}

export default Contact
