import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from 'redux/actions/counter';
import { login, logout } from 'redux/actions/isLogged';
import { getTodos } from 'redux/actions/todos';
import Posts from 'components/Posts'

function App() {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter);
	const isLogged = useSelector(state => state.isLogged);
	const todos = useSelector(state => state.todos);
	// console.log(isLogged)
	console.log(todos);


	React.useEffect(() => {
		dispatch(getTodos());
	}, []);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: '4rem',
			}}
		>
			{isLogged ? (
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<p>My profile</p>
					<p>Counter {counter}</p>
					<div>
						<button onClick={() => dispatch(increment())}>+</button>
						<button onClick={() => dispatch(decrement())}>-</button>
					</div>
					<br />
					<button onClick={() => dispatch(increment(5))}>+5</button> <br />
					<button onClick={() => dispatch(logout())}>Logout</button>
					<Posts />
				</div>
			) : (
				<button onClick={() => dispatch(login())}>Login</button>
			)}
		</div>
	);
}

export default App;
