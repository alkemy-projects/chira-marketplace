import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './sections/Register/Register'
import Home from './sections/Home/Home'
import Login from './sections/login/Login'
import { useSelector } from 'react-redux'
import Loader from './components/Loader/Loader'
import Product from './sections/Product/Product'
import { ProductsList } from './sections/ProductsList/ProductsList'

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
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/product/:id*'
						element={<Product />}
					/>
					<Route
						path='/products'
						element={<ProductsList />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}
