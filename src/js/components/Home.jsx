import React from "react";
import { useState } from "react";
import InputComponent from "./InputComponent";
import ListaTareas from "./ListaTareas";

//create your first component
const Home = () => {

	const [listaTareas, setListaTareas] = useState([])

	function agregarTarea(nuevaTarea) {
		//Esta es la forma de sustituir al push en React
		setListaTareas([...listaTareas, nuevaTarea]);
	}

	function eliminarTarea (nombreTarea){

		setListaTareas(listaTareas.filter(tarea => tarea !== nombreTarea))

	}

	return (
		<div className="text-center">
			<h1>
				Lista de tareas
				<i className="fa-solid fa-clipboard-list"></i>
			</h1>

			<InputComponent
				listaTareas={listaTareas}
				agregarTarea={agregarTarea}
			/>
			<ListaTareas
				listaTareas={listaTareas}
				eliminarTarea={eliminarTarea}
			/>
		</div>
	);
};

export default Home;