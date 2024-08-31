import React from 'react'

function Ingredientes({title, src, alt}) {
  return (
    <div>
        <div><img src={src} alt={alt} /></div>
        <p>{title}</p>
    </div>
  )
}

export default Ingredientes