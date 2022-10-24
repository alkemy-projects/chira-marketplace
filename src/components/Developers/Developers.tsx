import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

interface Props {
	developers: any[]
}

const Developers = ({ developers }: Props) => {
	return (
		<div className='main-developers'>
			<h3>Desarrolladores</h3>
			<div className='box'>
				{developers.map(dev => (
					<div
						key={dev.id}
						className='box-cardProfile'
					>
						<div className='box-cardProfile-boxImg'>
							<img
								src={dev.img}
								alt='asd'
							/>
						</div>
						<div className='box-cardProfile-description'>
							<h4>{dev.name}</h4>
							<span>Front-end developer</span>
							<div className='box-cardProfile-description-redes'>
								<a
									href={dev.linkedin}
									target='new'
								>
									<LinkedInIcon className='icon-linkedin' />
								</a>
								<a
									href={dev.github}
									target='new'
								>
									<GitHubIcon className='icon-github' />
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Developers
