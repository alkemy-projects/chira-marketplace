import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ProductsList } from './sections/ProductsList/ProductsList'
import Register from './sections/Register/Register'
import NotFound from './sections/NotFound/NotFound'
import Product from './sections/Product/Product'
import Login from './sections/login/Login'
import Cart from './sections/Cart/Cart'
import Home from './sections/Home/Home'
import CheckSession from './components/CheckSession/CheckSession'
import { Payment } from './sections/payment/Payment'
import { GreetfulUI } from './sections/GreetfulUI/GreetfulUI'
import Loader from './components/Loader/Loader'

export default function App() {
	const loader = useSelector((state: any) => state.loader)

	return (
		<div className='App'>
			{loader.status && <Loader progress={loader.progress} />}
			<HashRouter>
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
						path='/products/:query'
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
			</HashRouter>
		</div>
	)
}
