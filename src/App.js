import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './Components/Home';
import Clock from './Components/Clock';

function App() {
  return (
    <div>
     <Routes>
        <Route path='/home' element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;
