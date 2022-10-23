import { useEffect, useState } from 'react'
import Cards from '../../components/Card/Card'
import { useHeader } from '../../components/Header/useHeader'
import Header from '../../components/Header/Header'

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
			const data = await fetch(
				'https://api.mercadolibre.com/sites/MLA/search?q=' + search.search
			)
			const response = await data.json()
			setProducts(response.results)
		}

        
		bringProducts()
	}, [search.search])

	return (
		<>
			<Header />
			<div className='listCont'>
                <select name="ordenar" id="" style={{height:"30px"}} onChange={(e)=>setOrder(e.target.value)}>
                
                    <option value="low">low price</option>
                    <option value="high">high price</option>
                </select>
				{order =="low" && products.sort((productsa,productsb) => productsa.price > productsb.price ? 1 : -1).map(product => (
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
                {order == "high" && products.sort((productsa,productsb) => productsa.price > productsb.price ? 1 : -1).reverse().map(product => (
					<div
						className='listCards'
						key={product.id}
					>
						<Card
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
