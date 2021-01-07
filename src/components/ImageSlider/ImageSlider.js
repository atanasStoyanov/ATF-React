import React, { useState } from 'react';
// import { SliderData } from './sliderData';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import styles from './ImageSlider.module.css';

const ImageSlider = (props) => {
    const [current, setCurrent] = useState(0);
    const length = props.sliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(props.sliderData) || sliderData.length <= 0) {
        return null;
    }

    return (
        <div className={styles.media}>
            <div className={styles['ar-box']}>
                <div className={styles['ar-inner']}>
                    <FaArrowRight className={styles['right-arrow']} onClick={nextSlide} />
                    <FaArrowLeft className={styles['left-arrow']} onClick={prevSlide} />
                    {props.sliderData.map((slide, index) => {
                        return (
                            index === current && (<img src={slide.image} alt='tennis' className={styles.image} />)
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default ImageSlider;