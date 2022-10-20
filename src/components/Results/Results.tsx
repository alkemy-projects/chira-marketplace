import SearchIcon from '@mui/icons-material/Search'

export default function Results({ results }: { results: any }) {
	return (
		<section className='results'>
			<ul className='results-list'>
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
