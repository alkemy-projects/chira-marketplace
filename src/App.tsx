import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './sections/Register/Register'
import Login from './sections/login/Login'
import { useSelector } from 'react-redux'
import Loader from './components/Loader/Loader'

export default function App() {
	const loader = useSelector((state: any) => state.loader)

	return (
		<div className='App'>
			{loader.status && <Loader progress={loader.progress} />}
			<BrowserRouter>
				<Routes>
					<Route
						path='/register'
						element={<Register />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}
