import { useEffect, useState } from 'react'
import Cards from '../../components/Cards/Cards'
import Header from '../../components/Header/Header'
import { getResultsByQuery } from '../../Services/apiMercadoLibre'
import { useParams } from 'react-router-dom'

interface products {
	title: string
	price: string
	thumbnail: string
	id: string
}

export const ProductsList = () => {
	const [products, setProducts] = useState<Array<products>>([])
	const [order, setOrder] = useState<string>('low')
	const { query } = useParams()

	const short = string => {
		if (string.length > 35) {
			return string.substring(0, 35).concat('...')
		} else {
			return string
		}
	}

	useEffect(() => {
		const bringProducts = async () => {
			const data = await getResultsByQuery(query)
			setProducts(data.results)
		}
		bringProducts()
	}, [query])

	return (
		<>
			<Header />
			{query && query.length <= 0 && (
				<div className='no-results'>
					<h1>¡No se encontraron resultados! Prueba buscando otro producto</h1>
				</div>
			)}
			{query && query.length >= 1 && (
				<section className='product-list'>
					<h1>{query}</h1>
					<div className='product-list-wrapper'>
						<div className='filters'>
							<select
								name='ordenar'
								id=''
								style={{ height: '30px' }}
								onChange={e => setOrder(e.target.value)}
							>
								<option value='low'>Más baratos</option>
								<option value='high'>Más caros</option>
							</select>
						</div>
						<div className='listCont'>
							{order == 'low' &&
								products
									.sort((productsa, productsb) =>
										productsa.price > productsb.price ? 1 : -1
									)
									.map(product => (
										<Cards
											title={short(product.title)}
											image={product.thumbnail}
											price={product.price}
											id={product.id}
											key={product.id}
										/>
									))}
							{order == 'high' &&
								products
									.sort((productsa, productsb) =>
										productsa.price > productsb.price ? 1 : -1
									)
									.reverse()
									.map(product => (
										<div
											className='listCards'
											key={product.id}
										>
											<Cards
												title={short(product.title)}
												image={product.thumbnail}
												price={product.price}
												id={product.id}
											/>
										</div>
									))}
						</div>
					</div>
				</section>
			)}
		</>
	)
}
