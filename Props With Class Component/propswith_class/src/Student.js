import React, { Component } from "react";

export default class Student extends Component{



    render(){
        return(
            <div>
                Student : {this.props.name} <br /> 
                Email: {this.props.email}
            </div>
        )
    }
    
    
}

// in class component render is must but in functional component render is not required.
// we cannot do any kind of changes in those component in which we are receiving the values which is Student.js
// we can only do it in the parent component which is App.js

// whether you work on functional Component or in Class Component