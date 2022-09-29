import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './sections/Register/Register'
<<<<<<< HEAD
import Login from './sections/Login/Login'

export default function App() {
	
=======

export default function App() {
>>>>>>> 215845deea05328d3dc9fc54f37012b4e115f22e
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route
						path='/register'
						element={<Register />}
					/>
<<<<<<< HEAD
					<Route
						path='/login'
						element={<Login />}
					/>
=======
>>>>>>> 215845deea05328d3dc9fc54f37012b4e115f22e
				</Routes>
			</BrowserRouter>
		</div>
	)
}
