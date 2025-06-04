import * as React from 'react'
import  Navhoriz  from '../components/App6'
import  {
    container,
    Navhorizclass} from '../components/header.module.css'


import { StaticImage } from 'gatsby-plugin-image'

function Header() {
  return (
    <>
    <StaticImage
        alt="Banniere"
        src="../images/banniere-notebooks.png"
        />

        <div className='container'>
        <section className={Navhorizclass}>
       
        <Navhoriz />
        </section>
        </div>
       

    </>
  );
}

export default Header;