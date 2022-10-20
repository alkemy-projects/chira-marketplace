import { Link, useNavigate } from 'react-router-dom'
import DiamondIcon from '@mui/icons-material/Diamond'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import menuIcon from '../../assets/icons/menu-icon.svg'
import closeIcon from '../../assets/icons/close-icon.svg'
import { useState } from 'react'
import { useHeader } from './useHeader'
import { useDispatch, useSelector } from 'react-redux'
import Results from '../Results/Results'
import { setSearch } from '../../slicers/searchSlice'

export default function Header() {
	const [showMenu, setShowMenu] = useState(false)
	const navigate = useNavigate()
	const { search } = useHeader()
	const results = useSelector((state: any) => state.results)
	const dispatch = useDispatch()

	return (
		<header className='header'>
			<div className='header-top'>
				<div
					className='header-top-logo'
					onClick={() => navigate('/')}
				>
					<DiamondIcon className='diamond' />
					<div className='header-top-logo-title'>
						<h1>Chira</h1>
						<h3>marketplace</h3>
					</div>
				</div>
				<div className='header-top-buscador'>
					<form className={results.length >= 1 ? 'form active' : 'form'}>
						<input
							type='text'
							placeholder='Busca tu producto'
							value={search.search}
							onChange={e => dispatch(setSearch(e.target.value))}
						/>
						<button type='submit'>
							<SearchIcon className='icon-search' />
						</button>
					</form>
					{results.length >= 1 && <Results results={results} />}
				</div>
				{showMenu ? (
					<button
						className='menu-button'
						onClick={() => setShowMenu(!showMenu)}
					>
						<img
							className='menu-button__icon'
							src={menuIcon}
							alt='Abrir menú'
						/>
					</button>
				) : (
					<button
						className='menu-button'
						onClick={() => setShowMenu(!showMenu)}
					>
						<img
							className='menu-button__icon'
							src={closeIcon}
							alt='Cerrar menú'
						/>
					</button>
				)}
				<div className='menu'>
					<nav>
						<ul className='header-bottom-ul'>
							<Link to='/'>Categorias</Link>
							<Link to='/'>Ofertas</Link>
							<Link to='/'>Vender</Link>
							<Link to='/'>Ayuda</Link>
						</ul>
					</nav>
				</div>
			</div>
			<div className='header-bottom'>
				<nav>
					<ul className='header-bottom-ul'>
						<Link to='/'>Categorias</Link>
						<Link to='/'>Ofertas</Link>
						<Link to='/'>Vender</Link>
						<Link to='/'>Ayuda</Link>
					</ul>
				</nav>
				<div className='header-bottom-boxUser'>
					<Link to='/register'>Crea tu cuenta</Link>
					<Link to='/login'>Ingresa</Link>
					<Link to='/'>
						<ShoppingCartIcon className='icon-cart' />
					</Link>
				</div>
			</div>
		</header>
	)
}
