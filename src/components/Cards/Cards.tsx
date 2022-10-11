import { Link } from 'react-router-dom';
import './Cards.css';

interface Props {
    title: string
    array: {
        id: number
        title: string
        price: number
        description: string
        image: string
    }[]
}

const Cards = ({ title, array }: Props) => {

    return(
        <div className='main-box'>            
            <div className='card-title'>
                <span>{title}</span> 
                <Link to='/'>Ver más</Link>
            </div>
            <div className='box'>
                {array.map(prod => (
                    <div className="card" key={prod.id}>
                        <img src={prod.image} alt={prod.title} />
                        <span className="card-precio">${prod.price}</span>
                        <div className='card-oculto'>
                            <h5>{prod.title.slice(0, 18)}</h5>
                            <p className='card-description'>{prod.description.slice(0, 50)}{ 50 < prod.description.length && '...'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards;