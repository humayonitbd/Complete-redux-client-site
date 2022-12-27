import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../../assete/bannar-img/img05.webp"
import img2 from "../../../assete/bannar-img/img06.webp"

const HomeBanner = () => {
    return (
        <div className='my-2'>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeBanner;