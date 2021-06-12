import React from 'react'
import { useCustomer } from '../context/CustomerContext'

const AboutGrandChild = () => {

    const { customer } = useCustomer()

    return (
        <div>
            <h3>I am About's Grand Child</h3>
            <p>Hello {customer}</p>
        </div>
    )
}

export default AboutGrandChild
