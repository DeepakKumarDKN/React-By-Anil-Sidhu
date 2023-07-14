import logo from './logo.svg';
import './App.css';
import {Table} from 'react-bootstrap'

function App() {

  const users = [
    {name:'Deepak', gmail:'deepak@gmail.com', address: [
      {areaname: '324A/3 Delhi Noida Sector-7', city:'Delhi'},
      {areaname: '345A/3 Norway Twilight- City', city : 'Banglore'}
    ]}
  ]

  return (
    <div className="App">
      <h1>Nested List</h1>

      <Table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gmail</th>
            <th>Address</th>
          </tr>
          {
            users.map((e)=>(
              <tr>
                <td>{e.name}</td>
                <td>{e.gmail}</td>
                <Table
                <td>
                  {
                    e.address.map((data) => (
                      <tr>
                        <td>{data.areaname}</td>
                        <td>{data.city}</td>
                      </tr>

                    ))
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
