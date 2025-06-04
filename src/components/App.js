import React, { useState } from 'react';
import 'rsuite/dist/rsuite.min.css';
import { Nav } from 'rsuite';
import { Dropdown } from 'rsuite';
import { Icon }  from 'rsuite';
import './App.module.css'
function App() {

    return (
        <div>
            
            <h3>Sommaire</h3>
            <Nav vertical activeKey="home" >
                <Nav.Item eventKey="home" >
                    Propagation de la lumière
                </Nav.Item>
                <Nav.Item eventKey="news">
                    Réflexion
                </Nav.Item>
                <Nav.Item eventKey="solutions">
                    Réfraction
                </Nav.Item>
                <Nav.Item eventKey="products">
                    Products
                </Nav.Item>
                <Nav.Item eventKey="about">
                    About
                </Nav.Item>
                <Nav.Menu title="Practice">
                    <Nav.Item eventKey="4">
                        Data Structures
                    </Nav.Item>
                    <Nav.Item eventKey="5">
                        Algorithms
                    </Nav.Item>
                    <Nav.Item eventKey="6">
                        Programming Languages
                    </Nav.Item>
                </Nav.Menu>
                 
            </Nav>
        </div>
    );
}
export default App;