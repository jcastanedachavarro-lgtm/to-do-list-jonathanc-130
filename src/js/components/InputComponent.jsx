import React, { useState } from 'react'

export default function InputComponent({ agregarTarea }) {

    const [tarea, setTarea] = useState("")
    //const [listaTareas, setListaTareas] = useState([])


    function handleKeyDown(e) {
        if (tarea.trim() && e.key === "Enter") {
            alert("Agregando la tarea: " + tarea);
            const nuevaTarea = {
                label: tarea,
                is_done: false

            };

            agregarTarea(nuevaTarea)

            setTarea(" ")
        };
    }
    return (
        <section className="container-fluid d-grid">
            <form className="" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="exampleFormControlInput1" className="form-label">Nueva Tarea</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Escribir tarea" value={tarea}
                    onChange={(e) => setTarea(e.target.value)} onKeyDown={(e) => handleKeyDown(e)} />
            </form>
        </section>
    );
}
