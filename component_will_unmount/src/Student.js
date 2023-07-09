import { Component } from 'react';




class Student extends Component{

    componentWillUnmount(){
        alert('Hello i am unmount')
    }

  render(){
    return(
        <p>Student Component</p>
   
    )
  }
}

export default Student
