import React from 'react'

const FunctionalComponent = ({name}) => {

    const valueRef = React.useRef("Persistant Ref")
    const h3Ref = React.useRef();
    console.log("Child Functional Component called")
    React.useEffect(() => {
        console.log("h3Ref: ", h3Ref.current)
        console.log("valueRef: ", valueRef)
    })
    name = "abced"
    return (
        <div>
            <h3 ref={h3Ref}>Functional Component, Name is {name}</h3>
        </div>
    )
}

export default React.memo(FunctionalComponent)
// export default FunctionalComponent
