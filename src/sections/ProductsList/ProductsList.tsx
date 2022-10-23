import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import Cards from '../../components/Cards/Cards'
import { useHeader } from '../../components/Header/useHeader'
import Header from '../../components/Header/Header'
import { getResultsByQuery } from '../../Services/apiMercadoLibre'
export const ProductsList = () => {
	interface products {
		title: string
		price: string
		thumbnail: string
		id: string
	}
	const { search } = useHeader()
	const [products, setProducts] = useState<Array<products>>([])
	const [order, setOrder] = useState<string>("low")

	const short = string => {
		if (string.length > 35) {
			return string.substring(0, 35).concat('...')
		} else {
			return string
		}
	}



	useEffect(() => {
		const bringProducts = async () => {
			const data = await getResultsByQuery(search.search)
			setProducts(data.results)
		}


		bringProducts()
	}, [search.search])

	return (
		<>
			<Header />
			<div className='selectPrice'>
				<select name="ordenar" id="" style={{ height: "30px" }} onChange={(e) => setOrder(e.target.value)}>
					<option value="low">low price</option>
					<option value="high">high price</option>
				</select>
				</div>
			<div className='listCont'>
				
				{order == "low" && products.sort((productsa, productsb) => productsa.price > productsb.price ? 1 : -1).map(product => (
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
				{order == "high" && products.sort((productsa, productsb) => productsa.price > productsb.price ? 1 : -1).reverse().map(product => (
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
		</>
	)
}
