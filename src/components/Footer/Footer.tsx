import Developers from "../Developers/Developers";
import { useFooter } from './useFooter';

const Footer = () => {

    const { developers } = useFooter()

    return (
        <footer>
            <Developers developers={developers} />
            <span>Esta pagina fue creada sin fines de lucro.</span>
            <span>Cualquier duda o consulta puede consultar con cualquiera de los desarrolladores</span>
        </footer>
    )
}

export default Footer;
