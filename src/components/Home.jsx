import React from 'react'
import PropTypes from 'prop-types';
import { useCustomer } from '../context/CustomerContext';

const Home = () => {

    const context = useCustomer();

    React.useEffect(() => context.setCustomer("Tony"), [])

    return (
        <div>
            Home
            <h3>Welcome {context.customer}</h3>
        </div>
    )
}

export default Home
