import React from 'react'
import '../components-css/Ingredientes.css'
import Logo from '../assets/imagenes/logo1.png'

function Ingredientes({title, type, size, darkmode=false}) {
  let classIcon = `icon-${size}-${type}`;

  if (darkmode) {
    classIcon = `icon-${size}-${type} darkmode`;
  }
  
  
  return (
    <div className={classIcon}>
        <div><img src={Logo} alt={'hola'} /></div>
        <p>{title}</p>
    </div>
  )
}

export default Ingredientes