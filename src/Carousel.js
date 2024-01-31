import React, { useRef } from 'react';
import './Carousel.css'; // We will create this CSS file next

const Carousel = ({ children }) => {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            
            // Scroll the width of three cards to the left
            carouselRef.current.scrollLeft -= (carouselRef.current.offsetWidth);
            console.log(carouselRef.current.offsetWidth);
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            // Scroll the width of three cards to the right
            carouselRef.current.scrollLeft += (carouselRef.current.offsetWidth);
            console.log(carouselRef.current.offsetWidth);
        }
    };

    // Rest of the component remains the same

    return (
        <div className="carousel-container">
            <button onClick={scrollLeft}>Left</button>
            <div className="carousel" ref={carouselRef}>
                {children}
            </div>
            <button onClick={scrollRight}>Right</button>
        </div>
    );
};

export default Carousel;