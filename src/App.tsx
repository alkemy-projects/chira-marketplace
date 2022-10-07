import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './sections/Register/Register'
<<<<<<< HEAD
<<<<<<< HEAD
import Login from './sections/Login/Login'

export default function App() {
	
=======

export default function App() {
>>>>>>> 215845deea05328d3dc9fc54f37012b4e115f22e
=======
import Login from './sections/login/Login'
import { useSelector } from 'react-redux'
import Loader from './components/Loader/Loader'


export default function App() {
	const loader = useSelector((state: any) => state.loader)

>>>>>>> auth
	return (
		<div className='App'>
			{loader.status && <Loader progress={loader.progress} />}
			<BrowserRouter>
				<Routes>
					<Route
						path='/register'
						element={<Register />}
					/>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> auth
					<Route
						path='/login'
						element={<Login />}
					/>
<<<<<<< HEAD
=======
>>>>>>> 215845deea05328d3dc9fc54f37012b4e115f22e
=======
>>>>>>> auth
				</Routes>
			</BrowserRouter>
		</div>
	)
}
