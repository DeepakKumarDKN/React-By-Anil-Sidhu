import logo from './logo.svg';
import './App.css';
import PlayersInfo from './PlayersInfo'



function App() {

  let data  = [
    { name: 'Rohit Sharma', players_role : 'Batsmen'},
    { name: 'Virat Kohili', players_role : 'Batsmen'},
    { name: 'KL Rahul', players_role : 'Batsmen'},
    { name: 'SKY', players_role : 'Batsmen'},
    { name: 'Rishab Pant', players_role : 'Batsmen'},
    { name: 'Ravindra Jadega', players_role : 'Batsmen'},
    { name: 'Jasprit Bumrah', players_role : 'Bowler'}
  ] 
  return (
    <div className="App">
       <h1>Reuse- Component With List</h1>
       {
        data.map((item, e)=>(
            <PlayersInfo info = {item}/>
        ))
       }
    </div>
  );
}

export default App;
