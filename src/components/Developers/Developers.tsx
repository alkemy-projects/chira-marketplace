// import imagen from '../../assets/asd.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import './Developers.css'

const Developers = () => {
	return (
		<div className='main-box'>
			<h3>Developers</h3>
			<div className='box'>
				<div className='cardProfile'>
					<div className='box-img'>{/* <img src={imagen} alt="asd" /> */}</div>
					<div className='box-description'>
						<h4>Ezequiel Bibe</h4>
						<span>Front-end developer</span>
						<a
							href='https://www.linkedin.com/in/ezequielbibee1337/'
							target='new'
						>
							<LinkedInIcon className='icon-linkedin' />
						</a>
					</div>
				</div>
				<div className='cardProfile'></div>
				<div className='cardProfile'></div>
				<div className='cardProfile'></div>
				<div className='cardProfile'></div>
			</div>
		</div>
	)
}

export default Developers
