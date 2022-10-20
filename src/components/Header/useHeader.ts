import { useDispatch } from 'react-redux'
import { getResultsByQuery } from '../../Services/apiMercadoLibre'
import { setResults } from '../../slicers/resultsSlice'
import { useState, useEffect } from 'react'

export const useHeader = () => {
	const [search, setSearch] = useState('')
	const dispatch = useDispatch()

	useEffect(() => {
		if (search.length <= 0) return
		const timer = setTimeout(() => {
			searchProduct(search)
		}, 1000)
		return () => {
			clearTimeout(timer)
		}
	}, [search])

	const searchProduct = async query => {
		const data = await getResultsByQuery(query)
		const foundResults = data.results
		dispatch(setResults(foundResults))
	}

	return { search, setSearch, searchProduct }
}
