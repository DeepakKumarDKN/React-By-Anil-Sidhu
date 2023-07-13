import logo from './logo.svg';
import './App.css';
import { Table } from 'react-bootstrap';

function App() {

  const playersData = [
    {name:'Virat Kohili',battingaverage: 50.90, runsscored : 14000},
    {name:'Rohit Sharma',battingaverage: 45.90, runsscored : 12000},
    {name:'Subhman Gill',battingaverage: 30.90, runsscored : 3000},
    {name:'Kl Rahul',battingaverage: 40.90, runsscored : 5000},
    {name:'Surya Kumar Yadav',battingaverage: 40.90, runsscored : 3000},
    {name:'Yashwi Jaiswal',battingaverage: 30.90, runsscored : 1500},
    {name:'Hardik Pandya',battingaverage: 36.90, runsscored : 4000},
    {name:'Ravindra Jadega',battingaverage: 35.90, runsscored : 6000},
    {name:'M.S Dhoni',battingaverage: 50.90, runsscored : 10500},
  ]

  return (
    <div className="App">
      <h1>Players Info</h1>
      <Table bordered striped style={{margin: '0 auto'}}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Batting Average</td>
            <td>Runs Scored</td>
          </tr>
          {
            playersData.map((e) => (
              e.battingaverage > 40 ?
              <tr>
                <td>{e.name}</td>
                <td>{e.battingaverage}</td>
                <td>{e.runsscored}</td>
              </tr>: "No Data Found"
            ))
          }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
