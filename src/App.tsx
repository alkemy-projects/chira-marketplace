import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './sections/Register/Register'
import Login from './sections/login/Login'

export default function App() {
	return (
		<div className='App'>
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
