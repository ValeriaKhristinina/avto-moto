import Logo from './logo';
import Navigation from './navigation';

function Header(): JSX.Element {
    return (
        <header className="header">
            <section className="header__wrapper container">
                <Logo />
                <Navigation />
            </section>
        </header>
    )
}

export default Header;