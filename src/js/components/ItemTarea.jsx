import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent'
import "./ItemTarea.css"

//onMouseOver={()=>setInvisible(!invisible)}

export default function ItemTarea({ tarea, eliminarTarea }) {

    const [invisible, setInvisible] = useState(false);

    return (
        <section>
            <div onMouseEnter={() => setInvisible(true)}
                onMouseLeave={() => setInvisible(false)}
                className='container-tarea'>
                <li>
                    {tarea.label}
                </li>
                <div>
                    {invisible && <ButtonComponent texto="Eliminar" id={tarea.id} eliminarTarea={eliminarTarea} />}
                </div>
            </div>
        </section>
    )
}
