
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.module.css';
import Homepage from './view/Homepage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    {/* <Route path='/nav' element={<Navbar/>}/> */}
    <Route path='/' element={<Homepage/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
