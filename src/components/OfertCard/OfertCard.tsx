export const OfertCard = ({
    ofertText,
	image
}: {
	ofertText: string,
	image: string
	
})=>{
  
    return(
        <div className="ofertCardCont">
            
            <div className="ofertText">
                <p>{ofertText}</p>
                <h1>Hasta 25% off!</h1>
                <h1>y 6 cuotas sin interes</h1>
                <button>Ver mas</button>
            </div>
            <div className="ofertImg">
                <img src={image} alt="" />
            </div>
        </div>
    )
}