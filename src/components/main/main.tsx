import Slider from './slider';
import ProductFeatures from './product-features';
import About from './about';

function Main(): JSX.Element {
    return (
        <div className="main container">
            <div className="main-wrapper">
                <Slider />
                <ProductFeatures />
            </div>

            <About />
        </div>
    )
}

export default Main;