function ProductFeatures(): JSX.Element {
    return (
        <section className="product-features">
            <h2 className="product__name">Марпех 11</h2>
            <section className="mini-features">
                <div className="mini-features__item">
                    <img src="./img/gas-icon.svg" alt="gas icon" />
                    <span>бензин</span>
                </div>
                <div className="mini-features__item">
                    <img src="./img/mechanic-icon.svg" alt="gas icon" />
                    <span>механика</span>
                </div>
                <div className="mini-features__item">
                    <img src="./img/horse-icon.svg" alt="gas icon" />
                    <span>100 л.с.</span>
                </div>
                <div className="mini-features__item">
                    <img src="./img/volume-icon.svg" alt="gas icon" />
                    <span>1.4 л</span>
                </div>
            </section>
            <section className="product-wrapper__price">
                <div className="product__price">2 300 000 &#8381;</div>
                <div className="product__price product__price--old">2 400 000 &#8381;</div>
            </section>
            <div className="product-wrapper__btns">
                <button className="btn">Оставить заявку</button>
                <button className="btn btn--reverse-color">В кредит от 11 000 &#8381;</button>
            </div>
        </section>
    )
}

export default ProductFeatures;