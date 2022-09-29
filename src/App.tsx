import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './sections/Register/Register'

export default function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route
						path='/register'
						element={<Register />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}
