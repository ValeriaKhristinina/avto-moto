function Logo(): JSX.Element {
    return (
        <section className="logo">
            <div className="logo__image">
                <a href="">
                    <img src="./img/logo.svg" alt="logo" />
                </a>
            </div>
            <div className="logo-wrapper">
                <div className="logo__name"><a href="">Avto</a></div>
                <div className="logo__name"><a href="">Moto</a></div>
            </div>
        </section>
    )
}

export default Logo;