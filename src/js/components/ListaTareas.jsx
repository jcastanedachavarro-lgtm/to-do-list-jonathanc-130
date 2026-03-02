import React from 'react'
import ItemTarea from './ItemTarea'



export default function ListaTareas({ listaTareas, eliminarTarea }) {
  return (
    <div>
      <article>
        <h3>Tareas</h3>
        {listaTareas.length === 0 ? (<p>No hay tareas guardadas</p>) :
          (<ol>{listaTareas.map((tarea) =>
            <ItemTarea key={tarea.id} tarea={tarea} eliminarTarea={eliminarTarea} />)}
          </ol>)}
      </article>
    </div>
  )
}
