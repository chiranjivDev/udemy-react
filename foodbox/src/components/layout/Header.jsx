import headerImg from '../../assets/meals.jpg';
import './header.css';
import HeaderCartBtn from './HeaderCartBtn';

const Header = ({toggleCart}) => {
    return (
        <>
            <header className='header'>
                <h1>ResilienceMeals</h1>
                <HeaderCartBtn toggleCart={toggleCart}/>
            </header>
            <div className="header-img">
                <img src={headerImg} alt="Header Image"/>
            </div>
        </>
    )
}

export default Header;