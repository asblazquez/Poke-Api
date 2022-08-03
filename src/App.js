import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './Components/Home';
import { NavBar } from './Components/NavBar';
import { Pokemon } from './Components/Pokemon';

function App() {
  return (
    <div>
      <NavBar/>
     <Routes>
        <Route path='/home' element={ <Home/> } />
        <Route path='/pokemon' element={ <Pokemon/> } />
      </Routes>
    </div>
  );
}

export default App;
