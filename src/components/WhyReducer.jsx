import React from 'react';
import dataReducer, { initialState } from '../reducers/DataReducer'

export default function WhyReducer() {

//   const [status, setStatus] = React.useState("pending")
//   const [data, setData] = React.useState(null);
//   const [result, setResult] = React.useState({status: "pending", data: {name: null}})

  const [state, dispatch] = React.useReducer(dataReducer, initialState)

  React.useEffect(() => {
    dispatch({type: "FETCHING"})
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    // setStatus("resolved");
    // setData({name: "new Data"}); 
    // setResult({status: "resolved", data: {name: "new Data"}})
    throw new Error()
    dispatch({
        type:"SUCCESS",
        payload:{
            data: "New Data"
        }
    })
    }).catch(() => dispatch({
        type:"FAILURE",
    }))
  .then(json => console.log(json))
  },[])

  if(state.status === "pending")
    return <div>Loading....</div>

  if(state.status === "resolved")
    return <div><h3>{state.data}</h3></div>

  if(state.status === "rejected")
    return <div><h3>{state.error}</h3></div>

  return (
    <div>
      <h2>Fallback UI</h2>
    </div>
  )
}