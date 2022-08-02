import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './Components/Home';
import { NavBar } from './Components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
     <Routes>
        <Route path='/home' element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;
