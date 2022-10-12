import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../Cards/Cards";

interface props {
  phone: 
    [{title:string,
    thumbnail:string,
    price:number}]
  
}

export const SliderCarr =({phone} : props)=>{

    

    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
          <button
            className={className}
            style={{ ...style, display: "block", backgroundColor: "#4e9f3d", color: "green", borderRadius: "30px", width: "40px",height: "40px", margin: "0px -15px 0px -15px"}}
            onClick={onClick}
          />
        );
      }

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
    
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]

    }

      
    return(
        <>
         <Slider {...settings}>

{phone.map((phones) => (
  

 // <Cards title={phones.title} image={phones?.thumbnail} array={[]}/>

 <div className="card-carr">
 <img src={phones?.thumbnail} alt="" />
 <h1>{phones?.title}</h1>
 <h3>{phones?.price}</h3>

</div> 

  
))}
</Slider>
        </>
    )
}


{/**/}


{/* <div className="card-carr">
 <img src={phones?.thumbnail} alt="" />
 <h1>{phones?.title}</h1>
 <h3>{phones?.price}</h3>

</div> */}