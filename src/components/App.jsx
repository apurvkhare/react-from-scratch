import React from 'react'
import { CustomerProvider } from '../context/CustomerContext.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Home from './Home.jsx'
import ParentComponent from './ParentComponent.jsx'
import './style.css'
import Users from './Users.jsx'
import WhyReducer from './WhyReducer.jsx'

const App = () => {
    return (
        <div className='container'>
            <ParentComponent/>
            {/* <WhyReducer/> */}
            {/* <CustomerProvider>
                <Home/>
                <About />
            </CustomerProvider>
            <Contact email='abcd@gmail.com' />
            <Users /> */}
        </div>
    )
}

export default App
