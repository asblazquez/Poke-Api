import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './Components/Home';
import { NavBar } from './Components/NavBar';
import { Pokemon } from './Components/Pokemon';
import { AuthProvider } from './Components/Api';

function App() {
  return (
    <div>
      <NavBar/>
      <AuthProvider>
        <Routes>
          <Route path='/home' element={ <Home/> } />
          <Route path='/pokemon' element={ <Pokemon/> } />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
