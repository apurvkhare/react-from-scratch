import React from 'react'
import ClassComponent from './ClassComponent'
import FunctionalComponent from './FunctionalComponent'

const ParentComponent = () => {
    const [name, setName] = React.useState("Apurv")
    const [age, setAge] = React.useState(20)

    console.log("Parent Component called")

    return (
        <div>
            <FunctionalComponent name={name}/>
            <ClassComponent name={name}/>
            <h3>Age is {age}</h3>     
            <button onClick={() => setAge(25)}>update Age</button> 
            <button onClick={() => setName("Tony")}>update name</button>  
        </div>
    )
}

export default ParentComponent
