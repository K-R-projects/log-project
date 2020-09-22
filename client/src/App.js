import React from 'react';
import './App.css';
import signinPage from './pages/signinPage'
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route path ="/signin" component = {signinPage} />
    </div>
    </BrowserRouter>

  );
}

export default App;
