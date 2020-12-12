import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import NavBar from './Components/NavBar/NavBar';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
        <Route exact path="/"> <NavBar/> <Login/> </Route>

        <Route exact path="/register"> <NavBar/> <Register/> </Route>

        <Route exact path="/home"> <NavBar/> <Home/> </Route>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
