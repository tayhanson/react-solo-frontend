import { Component } from 'react';
import './App.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import NewLanguage from './pages/NewLanguage';
import NavBar from './components/NavBar'



import { Routes, Route, Link } from 'react-router-dom';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Portfolio Friend</h1>
        <Login />
      <div className="Nav">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">SignUp</Link>
          <Link to="/newlanguage">New Language</Link>
        </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/newlanguage" element={<NewLanguage />} />
        </Routes>
      </div>
      </header>
    </div>
    ); 
  }


export default App;
