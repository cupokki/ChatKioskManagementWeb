import {BrowserRouter, Route, Routes} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="*" element={<p>404 Not Found</p>}/>
        </Routes>
      </BrowserRouter>
      <footer>
        ⓒ Copyright by cupokki
      </footer>
    </div>
  );
}

export default App;
