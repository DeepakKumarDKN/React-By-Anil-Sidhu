import logo from './logo.svg';
import './App.css';
import {Table} from 'react-bootstrap'

function App() {

  const players = ['Virat','Rohit','Hardik','Yuzi','Rishab']
  // No need of using For Loop use Map

  const BioData = [
    {
      name:'Deepak',
      email : 'deepak@gmail.com',
      mobile : 8908226202
    },
    {
      name:'Rahul',
      email : 'rahul@gmail.com',
      mobile : 9098786545
    },
    {
      name:'Aly',
      email : 'aly@gmail.com',
      mobile : 3456789675
    }
  ]
  return (
    <div className="App">
      <h1>Handle Array With List</h1>
      {/* <ul>
        {
          players.map((e)=> (
            <li style={{listStyleType: 'none'}}>{e}</li>
          ))
        }
      </ul> */}

        {/* {
          BioData.map((e)=>(
            <p>{e.name}, <br />{e.email}, <br/> {e.mobile}</p>

          ))
        } */}

        <table style= {{margin: '0 auto' , border:"1px solid black", padding: '10px', backgroundColor : '#98AFC7'}}>
          <tr>
            <th style={{color:'black', fontSize: '18px'}}>Name</th>
            <th style={{color:'black', fontSize: '18px'}}>Email</th>
            <th style={{color:'black', fontSize: '18px'}}>Mobile</th>
          </tr>
          {
            BioData.map((e,i)=>(
              <tr key={i}>
                <td style={{border: "1px solid white", padding:"10px", color: "white"}}>{e.name}</td>
                <td style={{border: "1px solid white", padding:"10px", color: "white"}}>{e.mobile}</td>
                <td style={{border: "1px solid white", padding:"10px", color: "white"}}>{e.email}</td>
              </tr>
            ))
          }
        </table>
    </div>
  );
}

export default App;
