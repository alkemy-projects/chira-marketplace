import { useEffect,useState } from "react"
import { defaultAriaLiveMessages } from "react-select/dist/declarations/src/accessibility"
import Card from "../../components/Card/Card"
import { useHeader } from "../../components/Header/useHeader"
import Header from "../../components/Header/Header"


export const ProductsList =()=>{
    interface products{
        title:string
        price:string
        thumbnail: string
        id:string
    }
    const {
		search
	} = useHeader()
    const [products, setProducts] = useState<Array<products>>([])

    useEffect(()=>{
        const bringProducts  = async()=>{
            const data = await fetch("https://api.mercadolibre.com/sites/MLA/search?q="+search.search)
            const response = await data.json()
            setProducts(response.results)
        }

        bringProducts()
        console.log(search.search)
    },[search.search])
    return(
        <>
        <Header/>
        <div className="listCont">
           {products.map((product,i)=>(
            <div className="listCards">
            <Card title={product.title}
            image={product.thumbnail}
            price={product.price}
            id={product.id}
            key={product.id}/>
            </div>
           ))}
        </div>
        </>
    )
}