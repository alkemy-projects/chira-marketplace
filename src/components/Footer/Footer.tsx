import Developers from '../Developers/Developers'
import { useFooter } from './useFooter'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = () => {
	const { developers } = useFooter()

	return (
		<footer>
			<Developers developers={developers} />
			<div>
				<span>Esta pagina fue creada sin fines de lucro.</span>
				<span>
					Cualquier duda o consulta puede consultar con cualquiera de los
					desarrolladores
				</span>
				<div className='repository'>
					<GitHubIcon className='icon-github' />
					<a href='https://github.com/alkemy-projects/mercado-libre-clone'>
						Repositorio
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
