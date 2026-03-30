import React, { useState } from 'react'

export default function ButtonComponent({ clase, eliminarTarea, texto, id }) {


  return (

    <button
      className={`button ${clase}`}
      style={{ fontFamily: "monospace", color: 'white', background: 'red', borderBlockColor: "white" }}
      onClick={() => eliminarTarea(id)}
    >
      {texto}
    </button>

  )
}
