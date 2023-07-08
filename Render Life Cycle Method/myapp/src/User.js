import React, { Component, useState } from "react";

class User extends Component{

    constructor(){
        super()
        this.state = {
           name: "Deepak" 
        }
    }

    // using render is mandatory in class method otherwise it will not run 
    render(){
        return(
            <div>
                <h5>This is Fom User Component</h5>
                <h5>{this.state.name}</h5>
                <button onClick = {() => this.setState({name:'Hello'})}>Update Name</button>
            </div>
        )
    }
}

export default User;

// Question 
// Can we receive props inside an constructor : yes
