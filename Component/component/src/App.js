import logo from './logo.svg';
import './App.css'; 
import {User} from './User';
import ClassComp from './Classcomponent';



function App() {

  // creating Component inside another component
  function NestedComponent(){
    return(
      <div>Component Inside creating another component</div>
    )
  }

  return (
    <div className="App">
      <User/>
      <ClassComp />
      <NestedComponent />
    </div>
  );
}

export default App;
