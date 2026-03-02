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
                    {tarea.tareas}
                </li>
            <div>
                {invisible && <ButtonComponent texto="Eliminar" tarea={tarea} eliminarTarea={eliminarTarea} />}
            </div>
            </div>
        </section>
    )
}
