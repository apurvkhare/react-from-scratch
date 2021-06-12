import React from 'react'

const CustomerContext = React.createContext();

const useCustomer = () => {
    const context = React.useContext(CustomerContext)

    if(!context)
        throw new Error("useCustomer should be used within CustomerProvider")

    return context
}

const CustomerProvider = ({children}) => {

    const [customer, setCustomer] = React.useState("")

    const value = {
        customer,
        setCustomer
    }

    return <CustomerContext.Provider value={value}>
        {children}
    </CustomerContext.Provider>
}

export { useCustomer, CustomerProvider }