import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './Components/Home';
import Clock from './Components/Clock';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={ <Home/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
