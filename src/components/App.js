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
                <Nav.Item eventKey="1" >
                    <Link to="/page-ograph-1" style={linkStyles} activeStyle={activeStyles}>
                     Propriétés de la lumière
                     </Link>
                    
                </Nav.Item>
                <Nav.Item eventKey="2">
                    <Link to="/page-ograph-2" style={linkStyles} activeStyle={activeStyles}>
                    Condition de Gauss
                    </Link>
                </Nav.Item>
                <Nav.Item eventKey="3">
                    <Link to="/page-ograph-3" style={linkStyles} activeStyle={activeStyles}>
                    Objets et images
                    </Link>
                </Nav.Item>
                <Nav.Item eventKey="4">
                    <Link to="/page-ograph-4" style={linkStyles} activeStyle={activeStyles}>
                    Systèmes centrés
                    </Link>
                </Nav.Item>
                <Nav.Menu title="Systèmes optiques as S.C">
                    <Nav.Item eventKey="5">
                        <Link to="/page-ograph-5" style={linkStyles} activeStyle={activeStyles}>
                        Miroirs plans et sphériques
                        </Link>
                    </Nav.Item>
                    <Nav.Item eventKey="6">
                        <Link to="/page-ograph-6" style={linkStyles} activeStyle={activeStyles}>
                        Dioptres plans et sphériques
                        </Link>
                    </Nav.Item>
                    <Nav.Item eventKey="7">
                        <Link to="/page-ograph-7" style={linkStyles} activeStyle={activeStyles}>
                        Lentilles minces
                        </Link>
                    </Nav.Item>
                    <Nav.Item eventKey="8">
                        <Link to="/page-ograph-8" style={linkStyles} activeStyle={activeStyles}>
                        Lentilles épaisses
                        </Link>
                    </Nav.Item>
                </Nav.Menu>
                <Nav.Item eventKey="9">
                    <Link to="/page-ograph-9" style={linkStyles} activeStyle={activeStyles}>
                    à déterminer
                    </Link>
                </Nav.Item>
                <Nav.Item eventKey="10">
                    <Link to="/page-ograph-10" style={linkStyles} activeStyle={activeStyles}>
                    Foyers secondaires
                    </Link>
                </Nav.Item>
                <Nav.Item eventKey="11">
                    <Link to="/page-ograph-11" style={linkStyles} activeStyle={activeStyles}>
                    Associations de systèmes centrés
                    </Link>
                </Nav.Item>
                <Nav.Item eventKey="12">
                    <Link to="/page-ograph-12" style={linkStyles} activeStyle={activeStyles}>
                    Faisceaux
                    </Link>
                </Nav.Item>
                <Nav.Item eventKey="13">
                    <Link to="/page-ograph-13" style={linkStyles} activeStyle={activeStyles}>
                    Sections de faisceaux
                    </Link>
                </Nav.Item>
                <Nav.Item eventKey="14">
                    <Link to="/page-ograph-14" style={linkStyles} activeStyle={activeStyles}>
                    Les champs
                    </Link>
                </Nav.Item>
                <Nav.Item eventKey="15">
                    <Link to="/page-ograph-15" style={linkStyles} activeStyle={activeStyles}>
                    Les systèmes astigmates
                    </Link>
                </Nav.Item>
                <Nav.Item eventKey="16">
                    <Link to="/page-ograph-16" style={linkStyles} activeStyle={activeStyles}>
                    Exercices
                    </Link>
                </Nav.Item>
                <Nav.Item eventKey="17">
                    <Link to="/page-ograph-17" style={linkStyles} activeStyle={activeStyles}>
                    Modèle de l'oeil et vision
                    </Link>
                </Nav.Item>
                <Nav.Item eventKey="18">
                    <Link to="/page-ograph-18" style={linkStyles} activeStyle={activeStyles}>
                    Instruments d'optiques
                    </Link>
                </Nav.Item>
                <Nav.Item eventKey="about">
                    About
                </Nav.Item>
                
                 
            </Nav>
        </div>
    );
}
export default App;