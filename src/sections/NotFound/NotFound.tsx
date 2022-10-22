import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<section className='not-found'>
			<h1 className='not-found__title'>
				¡Ups! Parece que la ruta que has ingresado no existe
			</h1>
			<Link
				to='/'
				className='not-found__link'
			>
				Volver al inicio
			</Link>
		</section>
	)
}
