function Student(props){
    return(
        <div style={{backgroundColor: "#BEEFF5", width: "max-content", padding: 5, marginLeft: "auto", marginRight: "auto", marginBottom : 4}}>
            <h4>Students: {props.name}</h4>
            <p>Email: {props.email}</p>
            <p>Address : {props.address}</p>
        </div>
        
    )
}

export default Student

// function Student(props) : instead of props i can also used data its better to use props and if i  want to access it 
// for that i have to write {props.name}