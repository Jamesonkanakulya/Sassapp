import React, { useContext, useState } from 'react'
import Slider from "react-slick"
import { LabettieContext } from '../components/Context'

function MySlider(props) {
    // const responsive =props.responsive

    const SampleNextArrow = (prop) => {
        const { className, style, onClick } = prop;
        return (
            <div
                className={className}
                style={{ ...style, 
                    display:`${props.arrow?"inline":'none'}`, 
                    background:`${props.color?props.color:'#e83e8c'}`, 
                    left: `${props.nextButtonPosition?props.nextButtonPosition:'93%'}`, 
                    fontSize: "1rem" ,
                    padding:".5rem 2rem",
                    position:"relative",
                    top:`${props.nextTopPosition?props.nextTopPosition:'1rem'}`,
                    textAlign:"center",
                    justifyItems:"center",
                    borderRadius:"3rem",
                    initialSlide: 0,
                                }}

                onClick={onClick}
            />
        );
    }

    const SamplePrevArrow = (prop) => {
        const { className, style, onClick } = prop;
        return (
            <div
                className={`previous ${className} `}
                style={{ ...style, 
                display: `${props.arrow?"inline":'none'}`, 
                background:`${props.color?props.color:'#e83e8c'}`, 
                left: `${props.prevButtonPosition?props.prevButtonPosition:'5%'}`, 
                fontSize: "1rem" ,
                padding:".5rem 2rem",
                position:"relative",
                top:`${props.prevTopPosition?props.prevTopPosition:'20rem'}`,
                textAlign:"center",
                justifyItems:"center",
                borderRadius:"3rem",
                zIndex:1
            }}
     
                onClick={onClick}
            />
        );
    }

    const post = useContext(LabettieContext)

    var settings = {
        dots: props.dots,
        slidesToShow:props.SlideToshow,
        slidesToScroll: 1,
        autoplay: props.autopaly,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        infinite: props.autopaly,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive:props.responsive,
    
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1,
        //       initialSlide: 1
        //     }
        //   },
        // //   {
        // //     breakpoint: 480,
        // //     settings: {
        // //       slidesToShow: 1,
        // //       slidesToScroll: 1
        // //     }
        // //   }
        // ]
      };
    return (
        <div>
        <Slider {...settings}>
            {props.children}
        </Slider>
      </div>
    )
}

export default MySlider




