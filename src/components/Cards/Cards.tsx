import { Link } from 'react-router-dom'; 

interface Props {
    title: string
	image: string
	price: string
	id: string
}

const Cards = ({ title, image, price, id }: Props) => {

    const description = 'lorem ipsum dolor sit amet, con secte t ,lorem ipsum lorem, sed diamond lorem, sed diam nonum lorem, sed diam nonum'

    return(
        <>  
            <div className="card" key={id}>
                <div className='card-boxImg'>
                    <img src={image} alt={title} />
                </div>
                <span className="card-precio">${price}</span>
                <div className='card-oculto'>
                    <h5>{title.slice(0, 18)}</h5>
                    <p className='card-description'>{description.slice(0, 50)}{ 50 < description.length && '...'}</p>
                </div>
            </div>
        </>
    )
}

export default Cards;