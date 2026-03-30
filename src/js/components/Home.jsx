import React from "react";
import { useState, useEffect } from "react";
import InputComponent from "./InputComponent";
import ListaTareas from "./ListaTareas";
import { getApi, newTask, deleteTask } from "../api/api";

//create your first component
const Home = () => {

	const [listaTareas, setListaTareas] = useState([])

	function agregarTarea(nuevaTarea) {
		//Esta es la forma de sustituir al push en React
		//setListaTareas([...listaTareas, nuevaTarea]);
		newTask('https://playground.4geeks.com/todo/todos/jonathan_cast130', nuevaTarea)
			.then((data) => {
				console.log(data);
				getApi('https://playground.4geeks.com/todo/users/jonathan_cast130')
					.then((data) => setListaTareas(data.todos))
					.catch((error) => console.log(error))
			})
			.catch((error) => console.log(error))
	}

	function eliminarTarea(id) {

		//setListaTareas(listaTareas.filter(tarea => tarea !== nombreTarea))
		deleteTask(`https://playground.4geeks.com/todo/todos/${id}`)
			.then((data) => {
				console.log(data);
				getApi('https://playground.4geeks.com/todo/users/jonathan_cast130')
					.then((data) => setListaTareas(data.todos))
					.catch((error) => console.log(error))
			})
			.catch((error) => console.log(error))


	}

	useEffect(() => {


		getApi('https://playground.4geeks.com/todo/users/jonathan_cast130')
			.then((data) => setListaTareas(data.todos))
			.catch((error) => console.log(error))


	}, []);

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