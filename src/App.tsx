import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './sections/Register/Register'
import Home from './sections/Home/Home'
import Login from './sections/login/Login'
import { useSelector } from 'react-redux'
import Loader from './components/Loader/Loader'
import Product from './sections/Product/Product'
import { ProductsList } from './sections/ProductsList/ProductsList'
import NotFound from './sections/NotFound/NotFound'
import Cart from './sections/Cart/Cart'
import CheckSession from './components/CheckSession/CheckSession'
import { Payment } from './sections/payment/Payment'
import { GreetfulUI } from './sections/GreetfulUI/GreetfulUI'

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
						element={
							<CheckSession>
								<Home />
							</CheckSession>
						}
					/>
					<Route
						path='/purchase'
						element={
							<CheckSession>
								<GreetfulUI />
							</CheckSession>
						}
					/>
					<Route
						path='/product/:id/*'
						element={
							<CheckSession>
								<Product />
							</CheckSession>
						}
					/>
					<Route
						path='/products'
						element={
							<CheckSession>
								<ProductsList />
							</CheckSession>
						}
					/>
					<Route
						path='/cart'
						element={
							<CheckSession>
								<Cart />
							</CheckSession>
						}
					/>
					<Route
						path='/payment'
						element={<Payment />}
					/>
					<Route
						path='/notfound'
						element={<NotFound />}
					/>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}
