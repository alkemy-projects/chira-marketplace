import { useDispatch, useSelector } from 'react-redux'
import { getResultsByQuery } from '../../Services/apiMercadoLibre'
import { setResults } from '../../slicers/resultsSlice'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { clearSearch } from '../../slicers/searchSlice'

export const useHeader = () => {
	const [showResults, setShowResults] = useState(false)
	const [showLoader, setShowLoader] = useState(false)
	const [showCloseSession, setShowCloseSession] = useState(false)
	const search = useSelector((state: any) => state.search)
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
		navigate('/products')
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
	}
}
