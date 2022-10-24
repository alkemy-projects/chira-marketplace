import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearch } from '../../slicers/searchSlice'

export default function Category({
	title,
	icon,
}: {
	title: string
	icon: string
}) {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	return (
		<li
			className='category'
			onClick={() => {
				dispatch(setSearch(title)), navigate('/products')
			}}
		>
			<img
				className='category__icon'
				src={icon}
				alt={`Icono de ${title}`}
			/>
			<span className='category__title'>{title}</span>
		</li>
	)
}
