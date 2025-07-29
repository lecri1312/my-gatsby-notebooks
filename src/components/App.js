import React, { useState } from 'react';
import 'rsuite/dist/rsuite.min.css';
import { Nav } from 'rsuite';
import { Link } from 'gatsby';
import { Dropdown } from 'rsuite';
import { Icon }  from 'rsuite';
import './App.module.css'

const linkStyles = {
    color: 'black',
    textDecoration: 'none'
}

const activeStyles = {
    background: 'white',
    color :'green'
}
function App() {

    return (
        <div>
            
            <h3>Sommaire</h3>
            <Nav vertical activeKey="home" >
                <Nav.Item eventKey="prop" >
                    <Link to="/page-ograph-1" style={linkStyles} activeStyle={activeStyles}>
                     Propriétés de la lumière
                     </Link>
                    
                </Nav.Item>
                <Nav.Item eventKey="gauss">
                    Condition de Gauss
                </Nav.Item>
                <Nav.Item eventKey="A&A'">
                    Objets et images
                </Nav.Item>
                <Nav.Item eventKey="S.C">
                    Systèmes centrés
                </Nav.Item>
                <Nav.Menu title="Systèmes optiques as S.C">
                    <Nav.Item eventKey="4">
                        Miroirs plans et sphériques
                    </Nav.Item>
                    <Nav.Item eventKey="5">
                        Dioptres plans et sphériques
                    </Nav.Item>
                    <Nav.Item eventKey="6">
                        Lentilles minces
                    </Nav.Item>
                    <Nav.Item eventKey="6">
                        Lentilles épaisses
                    </Nav.Item>
                </Nav.Menu>
                <Nav.Item eventKey="S.O">
                    Systèmes optiques as S.C
                </Nav.Item>
                <Nav.Item eventKey="phi">
                    Foyers secondaires
                </Nav.Item>
                <Nav.Item eventKey="asso">
                    Associations de systèmes centrés
                </Nav.Item>
                <Nav.Item eventKey="Faisceaux">
                    Faisceaux
                </Nav.Item>
                <Nav.Item eventKey="Section">
                    Sections de faisceaux
                </Nav.Item>
                <Nav.Item eventKey="champs">
                    Les champs
                </Nav.Item>
                <Nav.Item eventKey="astigma">
                    Les systèmes astigmates
                </Nav.Item>
                <Nav.Item eventKey="Ex">
                    Exercices
                </Nav.Item>
                <Nav.Item eventKey="vision">
                    Modèle de l'oeil et vision
                </Nav.Item>
                <Nav.Item eventKey="instruments">
                    Instruments d'optiques
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