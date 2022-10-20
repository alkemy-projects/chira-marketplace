import { useDispatch, useSelector } from 'react-redux'
import { getResultsByQuery } from '../../Services/apiMercadoLibre'
import { setResults } from '../../slicers/resultsSlice'
import { useEffect } from 'react'

export const useHeader = () => {
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
		dispatch(setResults(foundResults))
	}

	return { search, searchProduct }
}
