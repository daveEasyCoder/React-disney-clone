import React, {useRef,useEffect} from 'react'
import HeroSlider from './HeroSlider'
const Hero = () => {

    const slideRef = useRef();
    const herowidth = useRef();

    const leftSlide = () => {
        slideRef.current.style.scrollBehavior = "smooth";
       slideRef.current.scrollLeft += herowidth.current.offsetWidth + 10;
    }

    const rightSlide = () => {
        slideRef.current.style.scrollBehavior = "smooth";
        slideRef.current.scrollLeft -= herowidth.current.offsetWidth + 10;
    }


  return (
       <div className="hero-section">
         <div className='hero-container' ref={slideRef}>
            {HeroSlider.map((slider) => (
                <div key={slider.id} className='hero' ref={herowidth}>
                    <div className='hero-left'>
                       <h2>{slider.title}</h2>
                       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa itaque doloremque natus repellendus, velit iste incidunt earum quidem sunt modi!</p>
                    </div>
                    <div className='hero-right'>
                        <img src={`${import.meta.env.BASE_URL}${slider.image}`} alt="image" />
                    </div>
                </div>
            ))}
        </div>
         <button className='slider-btn prev-btn' onClick={rightSlide} >&#10094;</button>
         <button className='slider-btn next-btn' onClick={leftSlide}>&#10095;</button>
     </div>
  )
}

export default Hero