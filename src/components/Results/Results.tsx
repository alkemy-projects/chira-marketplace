import SearchIcon from '@mui/icons-material/Search'

export default function Results({ results }: { results: any }) {
	console.log(results)
	return (
		<section className='results'>
			<ul className='results-list'>
				{results.map(result => (
					<li
						className='result'
						key={result.id}
					>
						<SearchIcon className='icon-search' />
						<span className='result__name'>{result.title}</span>
					</li>
				))}
			</ul>
		</section>
	)
}
