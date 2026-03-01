import React, { useState } from 'react'
import ButtonComponent from './ButtonComponent'

//onMouseOver={()=>setInvisible(!invisible)}

export default function ItemTarea({ tarea, eliminarTarea }) {

    const [invisible, setInvisible] = useState(false);

    return (
        <section>
            <div onMouseOver={() => setInvisible(!invisible)}>
                <li>
                    {tarea.tareas}
                </li>
            </div>
            <div>
                {invisible && <ButtonComponent texto="Eliminar" tarea={tarea} eliminarTarea={eliminarTarea} />}
            </div>
        </section>
    )
}
