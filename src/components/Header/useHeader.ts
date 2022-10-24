import { useDispatch, useSelector } from 'react-redux'
import { getResultsByQuery } from '../../Services/apiMercadoLibre'
import { setResults } from '../../slicers/resultsSlice'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clearSearch } from '../../slicers/searchSlice'
import { getAuth, signOut } from 'firebase/auth'

export const useHeader = () => {
	const [showResults, setShowResults] = useState(false)
	const [showLoader, setShowLoader] = useState(false)
	const [showCloseSession, setShowCloseSession] = useState(false)
	const search = useSelector((state: any) => state.search)
	const cartState = useSelector((state: any) => state.cart)
	const dispatch = useDispatch()
	const loggedUser = JSON.parse(localStorage.getItem('user') || 'null')
	const navigate = useNavigate()

	useEffect(() => {
		if (search.search.length <= 0) return
		setShowResults(true)
		const timer = setTimeout(() => {
			searchProduct(search.search)
		}, 1000)
		return () => {
			clearTimeout(timer)
		}
	}, [search.search])

	useEffect(() => {
		dispatch(clearSearch())
	}, [])

	const searchProduct = async query => {
		const data = await getResultsByQuery(query)
		const foundResults = data.results
		setShowLoader(false)
		dispatch(setResults(foundResults))
	}

	window.onclick = (event: MouseEvent) => {
		if (
			showResults &&
			!(document.querySelector('.results') as HTMLElement).contains(
				event.target as Node
			) &&
			(event.target as HTMLUListElement).className !== 'results-list' &&
			(event.target as HTMLUListElement).className !== 'form__input'
		)
			setShowResults(false)
	}

	const defineFormClassName = () => (!showResults ? 'form' : 'form active')

	const searching = e => {
		e.preventDefault()
		if (e.target[0].value.length <= 0) return
		navigate('/products')
	}

	const cartItemsQuantity = () => {
		const cart =
			cartState.length >= 1
				? cartState
				: JSON.parse(localStorage.getItem('cart') || '[]')
		return cart.length
	}

	const closeSession = () => {
		const auth = getAuth()
		localStorage.removeItem('user')
		signOut(auth)
	}

	return {
		search,
		showResults,
		setShowResults,
		showLoader,
		setShowLoader,
		defineFormClassName,
		loggedUser,
		showCloseSession,
		setShowCloseSession,
		searching,
		cartItemsQuantity,
		closeSession,
	}
}
