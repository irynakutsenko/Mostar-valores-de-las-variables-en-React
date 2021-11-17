import logo from './logo.svg';
import './App.css';
import React from 'react';


function Mostrar() {
	let inform = { nombre:"Salsa dance party",
		fecha:"24/07/2020", hora:"16:00", lugar: { direccion: "Done Bikendi Kalea, 2",
			cuidad:"Bilbao"}
	}
	return (
		<>
		<p>{inform.nombre}</p>
		<p>{inform.fecha}</p>
		<p>{inform.hora}</p>
		<p>{inform.lugar.direccion}</p>
		<p>{inform.lugar.cuidad}</p>
		</>
	)
}

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

export default App;
