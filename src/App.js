import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin';
import Homepage from './Components/Homepage';
import Landing from './Components/Landing';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Landing/>}/>;
          <Route path='/signin' exact element = {<Signin/>}/>;
          <Route path='/home' exact element={<Homepage/>}/>;
          </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
