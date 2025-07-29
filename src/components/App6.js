import React, { useState } from 'react';
import 'rsuite/dist/rsuite.min.css';
//import 'rsuite/dist/rsuite-no-reset.min.css';
import { Nav, VStack} from 'rsuite';
import { Link } from 'gatsby';

const linkStyles = {
    color: 'blue',
    textDecoration: 'none'
}

const activeStyles = {
    background: 'white',
    color :'green'
}
const Navgen = () => (


  <VStack spacing={30} >
  
    <Nav appearance="pills" defaultActiveKey="index">
    <Nav.Item eventKey="index"><Link to="../" style={linkStyles} activeStyle={activeStyles}   >Accueil</Link></Nav.Item>
    <Nav.Item eventKey="opt_graphique"><Link to="/opt_graphique" style={linkStyles} activeStyle={activeStyles}>Optique graphique</Link></Nav.Item>
      <Nav.Item eventKey="opt_geometrique" disabled>
        Optique Géométrique
      </Nav.Item>
      <Nav.Item eventKey="numerique" disabled>Numérique</Nav.Item>
      <Nav.Item eventKey="mathematique" disabled>Mathématiques</Nav.Item>
      <Nav.Item eventKey="calepins" ><Link to="/calepins" style={linkStyles} activeStyle={activeStyles}>Calepins</Link></Nav.Item>
    </Nav>
  
  </VStack>

);
export default Navgen;
