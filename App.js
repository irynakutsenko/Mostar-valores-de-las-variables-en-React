import logo from './logo.svg';
import './App.css';
import React from 'react';

//Crerar una function() que nos tiene que devolver la informavion de una variable
function Mostrar() {
	//Escribir la variable siempre debajo de la function
	let inform = { nombre:"Salsa dance party",
		fecha:"24/07/2020", hora:"16:00", lugar: { direccion: "Done Bikendi Kalea, 2",
			cuidad:"Bilbao"}
	}
	return (
		//Siempre poner en el principio <> y </> en el final para devolver en el return()
		<> 
		<p>{inform.nombre}</p>
		<p>{inform.fecha}</p>
		<p>{inform.hora}</p>
		<p>{inform.lugar.direccion}</p>
		<p>{inform.lugar.cuidad}</p>
		</>
	)
}
//Son aplicaciones principales cuando instalas un paquete de React
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			< Mostrar />
		</div>
	);
}
//Y al final llamar a la function que se llama Mostrar con <> y </>
export default App;
//Export default ponemos si la variable esta en otra carpeta