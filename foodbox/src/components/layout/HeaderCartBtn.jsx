import './headerCartBtn.css';
import CartIcon from '../cart/CartIcon';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartBtn = ({toggleCart}) => {

    const cartCtx = useContext(CartContext);

    const numOfCartItems = cartCtx.items.reduce((total, item)=>{
        total=total + item.amount;
        return total;
    }, 0);

    return (
        <>
            <button className="button" onClick={toggleCart}>
                <span className="icon">
                    <CartIcon/>
                </span>
                <span>
                    your cart
                </span>
                <span className='badge'>
                    {numOfCartItems}
                </span>
            </button>
        </>
    );
};

export default HeaderCartBtn;