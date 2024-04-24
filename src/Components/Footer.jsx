import React from 'react'
import './Css/Footer.css'


const Footer = () => {
  return (

   <footer className='footer' >
    <p>CIN No. UTAPPIO2021PLC378755 @ Copyright owned by Neotec Enterprises Ltd. 2022</p>
    <p>{<button className='ftr_btn1' >Terms of Use</button>}  |  {<button className='ftr_btn1' >Privacy Policy</button>}</p>

    
   </footer>

  )
}

export default Footer;
