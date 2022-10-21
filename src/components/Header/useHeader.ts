import { useDispatch, useSelector } from 'react-redux'
import { getResultsByQuery } from '../../Services/apiMercadoLibre'
import { setResults } from '../../slicers/resultsSlice'
import { useEffect, useState } from 'react'

export const useHeader = () => {
	const [showResults, setShowResults] = useState(false)
	const [showLoader, setShowLoader] = useState(false)
	const search = useSelector((state: any) => state.search)
	const dispatch = useDispatch()

	useEffect(() => {
		if (search.search.length <= 0) return
		const timer = setTimeout(() => {
			searchProduct(search.search)
		}, 1000)
		return () => {
			clearTimeout(timer)
		}
	}, [search.search])

	const searchProduct = async query => {
		const data = await getResultsByQuery(query)
		const foundResults = data.results
		setShowLoader(false)
		dispatch(setResults(foundResults))
	}

	useEffect(() => {
		if (search.search.length <= 0) return
		setShowResults(true)
	}, [search.search])

	window.onclick = (event: MouseEvent) => {
		console.log(document.querySelector('.results'))
		if (
			showResults &&
			!document.querySelector('.results').contains(event.target) &&
			event.target.className !== 'results-list' &&
			event.target.className !== 'form__input'
		)
			setShowResults(false)
	}

	const defineFormClassName = () => {
		if (!showResults) return 'form'
		else return 'form active'
	}

	return {
		search,
		showResults,
		setShowResults,
		showLoader,
		setShowLoader,
		defineFormClassName,
	}
}