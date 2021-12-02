function Slider(): JSX.Element {
    return (
        <section className="slider">
            <section className="slader__main-image">
                <img src="./img/desktop_slide_1.jpg" alt="slide" width="600" height="375" />
            </section>
            <section className="slider-navigation">
                <div className="slider__arrow slider__arrow-prev slider__arrow--disabled">
                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.00427 6.17188L6.91841 0.368597M1.00427 6.17188L6.69294 11.9692M1.00427 6.17188L19.9813 6.35128" stroke="#48494D" />
                    </svg>
                </div>
                <section className="slider__preview">
                    <div className="slider__preview-image">
                        <img src="./img/mini-1.jpg" alt="" width="128" height="80" />
                    </div>
                    <div className="slider__preview-image">
                        <img src="./img/mini-2.jpg" alt="" width="128" height="80" />
                    </div>
                    <div className="slider__preview-image">
                        <img src="./img/mini-3.jpg" alt="" width="128" height="80" />
                    </div>
                </section>
                <div className="slider__arrow slider__arrow-next">
                    <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9873 6.17188L13.0747 0.368597M18.9873 6.17188L13.3001 11.9692M18.9873 6.17188L0.0150977 6.35128" stroke="#48494D" />
                    </svg>
                </div>
            </section>
        </section>
    )
}

export default Slider;