function Slider(): JSX.Element {
    return (
        <section className="slider">
            <section className="slader__main-image">
                <img src="" alt="" width="600" height="375" />
            </section>
            <section>
                <div className="slider__arrow slider__arrow-prev"></div>
                <section className="slider__preview">
                    <div className="slider__preview-image">
                        <img src="" alt="" width="128" height="80" />
                    </div>
                </section>
                <div className="slider__arrow slider__arrow-next"></div>
            </section>
        </section>
    )
}

export default Slider;