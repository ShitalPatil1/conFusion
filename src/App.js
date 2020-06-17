import React from 'react';
import logo from './logo.svg';
import { Navbar } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
    <Menu />
    </div>
  );
}

export default App;
