import React, { useState, useEffect } from 'react'
import "../assets/css/Saludo.css"


function HourNow() {
    const ahora = new Date()
    const hora = ahora.getHours()

    return hora
}

function Saludo({darkmode}) {
    const [saludo, setSaludo] = useState('')

    useEffect(() => {
        const hourNow = HourNow();
        
        if (hourNow >= 1 && hourNow <= 12) {
            setSaludo('¡Buenos Días!');
        } else if (hourNow > 12 && hourNow <= 18) {
            setSaludo('¡Buenas Tardes!');
        } else {
            setSaludo('¡Buenas Noches!');
        }
    }, [])

    if (darkmode) {
        return (
            <div className='saludo darkmode'>{saludo}</div>
        )
    } else {
        return (
            <div className='saludo'>{saludo}</div>
        )
    }
  
}

export default Saludo