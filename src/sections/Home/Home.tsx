import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Home =()=>{

    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
          <button
            className={className}
            style={{ ...style, display: "block", backgroundColor: "lightgrey",color: "green", borderRadius: "15px", width: "30px" }}
            onClick={onClick}
          >
            
            </button>
        );
      }
      var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
        nextArrow: <Arrow/>,
        prevArrow: <Arrow/>,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
      };
    return(
        <div className="home-cont">
            <div style={{width: "100%", border: "solid 1px red"}}>
                <h1>header</h1>
            </div>

           
      <div className=" carr">
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div className="card-carr">
            <img src="data:image/jpeg;base64,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" alt="" />
            <h1>Telefono 1</h1>
            <h3>$10.000</h3>
            <p>Telefono motorola</p>
          </div>
          <div className="card-carr">
          <h1>Telefono 2</h1>
            <h3>$10.000</h3>
            <p>Telefono motorola</p>
          </div>
          <div className="card-carr">
          <h1>Telefono 3</h1>
            <h3>$10.000</h3>
            <p>Telefono motorola</p>
          </div>
          <div className="card-carr">
          <h1>Telefono 4</h1>
            <h3>$10.000</h3>
            <p>Telefono motorola</p>
          </div>
          <div className="card-carr">
          <h1>Telefono 5</h1>
            <h3>$10.000</h3>
            <p>Telefono motorola</p>
          </div>
          <div className="card-carr">
          <h1>Telefono 6</h1>
            <h3>$10.000</h3>
            <p>Telefono motorola</p>
          </div>
          <div className="card-carr">
          <h1>Telefono 7</h1>
            <h3>$10.000</h3>
            <p>Telefono motorola</p>
          </div>
          <div className="card-carr">
          <h1>Telefono 8</h1>
            <h3>$10.000</h3>
            <p>Telefono motorola</p>
          </div>
        </Slider>
      </div>
      </div>
            </div>
          
   
            
        
    )
}

/*
 * */