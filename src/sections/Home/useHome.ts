import { useEffect, useState } from 'react'
import steeringWheelIcon from '../../assets/icons/steering-wheel-icon.svg'
import microphoneIcon from '../../assets/icons/microphone-icon.svg'
import smartphoneIcon from '../../assets/icons/smartphone-icon.svg'
import furnitureIcon from '../../assets/icons/furniture-icon.svg'
import computerIcon from '../../assets/icons/computer-icon.svg'
import lipstickIcon from '../../assets/icons/lipstick-icon.svg'
import couchIcon from '../../assets/icons/couch-icon.svg'
import clothIcon from '../../assets/icons/cloth-icon.svg'
import gamesIcon from '../../assets/icons/games-icon.svg'
import chefIcon from '../../assets/icons/chef-icon.svg'
import ballIcon from '../../assets/icons/ball-icon.svg'
import ovenIcon from '../../assets/icons/oven-icon.svg'
import toyIcon from '../../assets/icons/toy-icon.svg'
import carIcon from '../../assets/icons/car-icon.svg'
import { getResultsByQuery } from '../../Services/apiMercadoLibre'

export const useHome = () => {
	const [phones, setPhones] = useState<any[]>([])
	const [results, setResults] = useState<any[]>([])

	const [categories, setCategories] = useState([
		{ id: 'MLA1051', title: 'Autos, Motos y Otros', icon: carIcon },
		{ id: 'MLA5725', title: 'Computación', icon: computerIcon },
		{ id: 'MLA1144', title: 'Ropa y Accesorios', icon: clothIcon },
		{ id: 'MLA2547', title: 'Deportes y Fitness', icon: ballIcon },
		{ id: 'MLA1055', title: 'Celulares y Teléfonos', icon: smartphoneIcon },
		{ id: 'MLA1648', title: 'Juguetes', icon: toyIcon },
		{ id: 'MLA1276', title: 'Alimentos y bebidas', icon: chefIcon },
		{ id: 'MLA1039', title: 'Hogar, Muebles y Jardín', icon: couchIcon },
		{ id: 'MLA1246', title: 'Consolas y Videojuegos', icon: gamesIcon },
		{
			id: 'MLA1246',
			title: 'Electrónica, audio y video',
			icon: microphoneIcon,
		},
		{ id: 'MLA1367', title: 'Belleza y Cuidado Personal', icon: lipstickIcon },
		{ id: 'MLA1430', title: 'Inmuebles', icon: furnitureIcon },
		{
			id: 'MLA1574',
			title: 'Accesorios para vehiculos',
			icon: steeringWheelIcon,
		},
		{ id: 'MLA1743', title: 'Electrodomésticos', icon: ovenIcon },
	])

	useEffect(() => {
		if (phones.length >= 1) return
		bringPhones()
	}, [])

	const bringPhones = async () => {
		const data = await fetch(
			'https://api.mercadolibre.com/sites/MLA/search?category=MLA1055'
		)
		const resp = await data.json()
		setPhones(resp.results)
	}

	const searchProduct = async query => {
		const data = await getResultsByQuery(query)
		const foundResults = data.results
		setResults([...results, foundResults])
	}

	return { phones, categories, results, searchProduct }
}
