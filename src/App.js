import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from './redux/actions/index';

function App() {
	//Para acceder a un atributo del estado
	//definimos state.<el reducer que controla a ese atributo>
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.logged);

	const dispatch = useDispatch();
	return (
		<div className='App'>
			<h1>Counter {counter}</h1>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			{isLogged ? (
				<h3>Aparece solo si estas logeado</h3>
			) : (
				<h3>Please loggin</h3>
			)}
		</div>
	);
}

export default App;
