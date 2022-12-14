import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { setSearch } from '../../slicers/searchSlice'
import DiamondIcon from '@mui/icons-material/Diamond'
import SearchIcon from '@mui/icons-material/Search'
import closeIcon from '../../assets/icons/close-icon.svg'
import menuIcon from '../../assets/icons/menu-icon.svg'
import Results from '../Results/Results'
import { useHeader } from './useHeader'
import { clearResults } from '../../slicers/resultsSlice'

export default function Header() {
	const [showMenu, setShowMenu] = useState(false)
	const {
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
		cartItemsQuantity,
		closeSession,
	} = useHeader()
	const results = useSelector((state: any) => state.results)
	const dispatch = useDispatch()

	return (
		<header className='header'>
			<div className='header-top'>
				<Link
					className='header-top-logo'
					to='/'
				>
					<DiamondIcon className='diamond' />
					<div className='header-top-logo-title'>
						<h1>Chira</h1>
						<h3>Marketplace</h3>
					</div>
				</Link>
				<div className='header-top-buscador'>
					<form
						className={defineFormClassName()}
						onSubmit={searching}
					>
						<input
							className='form__input'
							type='text'
							placeholder='Busca tu producto'
							value={search.search}
							onChange={e => {
								setShowLoader(true)
								dispatch(clearResults())
								dispatch(setSearch(e.target.value))
							}}
							onFocus={() => search.search.length >= 1 && setShowResults(true)}
						/>
						<button type='submit'>
							<SearchIcon className='icon-search' />
						</button>
					</form>
					{showResults && (
						<Results
							results={results}
							showLoader={showLoader}
						/>
					)}
				</div>
				{showMenu ? (
					<button
						className='menu-button'
						onClick={() => setShowMenu(!showMenu)}
					>
						<img
							className='menu-button__icon'
							src={menuIcon}
							alt='Abrir men??'
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
							alt='Cerrar men??'
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
					{loggedUser ? (
						<div
							className='logged-user'
							onClick={() => setShowCloseSession(!showCloseSession)}
						>
							<span className='logged-user__email'>{loggedUser.email}</span>
							{showCloseSession && (
								<button
									className='logged-user__close-session'
									onClick={() => {
										closeSession()
										location.reload()
									}}
								>
									Cerrar sesi??n
								</button>
							)}
						</div>
					) : (
						<>
							<Link to='/register'>Crea tu cuenta</Link>
							<Link to='/login'>Ingresa</Link>
						</>
					)}
					<Link to='/cart'>
						<ShoppingCartIcon className='icon-cart' />
						<span className='cart-items-quantity'> {cartItemsQuantity()} </span>
					</Link>
				</div>
			</div>
		</header>
	)
}
