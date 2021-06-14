import React, { PureComponent, Component } from 'react'

export class ClassComponent extends PureComponent {

    constructor(props){
        super(props)
    }

    render() {

        console.log("Child Class Component called")
        return (
            <div>
                <h3>Name is : {this.props.name}</h3>
            </div>
        )
    }
}

export default ClassComponent
