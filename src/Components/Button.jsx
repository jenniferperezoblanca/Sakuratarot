import React from 'react'

const Button = () => {
  return (
    <div className='boton'>
        <button onClick={() => window.location.reload(false)}>¿Quieres jugar?</button>
    </div>
  )
}

export default Button