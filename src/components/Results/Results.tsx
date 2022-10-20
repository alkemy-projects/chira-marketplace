import SearchIcon from '@mui/icons-material/Search'
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner'

export default function Results({
	results,
	showLoader,
}: {
	results: any
	showLoader: any
}) {
	return (
		<section className='results'>
			<ul className={showLoader ? 'results-list loading' : 'results-list'}>
				{showLoader && <LoaderSpinner />}
				{results.slice(0, 6).map(result => (
					<li
						className='result'
						key={result.id}
					>
						<SearchIcon className='icon-search' />
						<div className='result-wrapper'>
							<span className='result__title'>{result.title}</span>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
