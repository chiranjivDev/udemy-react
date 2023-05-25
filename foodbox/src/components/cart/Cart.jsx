import './cart.css';
import Modal from '../ui/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart = ({toggleCart}) => {
    // const cartItems=[{id:"c1", name:'Sushi', price:9.99, amount:2}];

    const cartCtx = useContext(CartContext);

    return (
        <Modal toggleCart={toggleCart}>
            <ul className='cart-items'>
                {
                    cartCtx.items.map((item)=>{
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>
            <div className='total'>
                <span>Total amount</span>
                <span>${cartCtx.totalAmount.toFixed(2)}</span>
            </div>
            <div className='actions'>
                <button className='button' onClick={toggleCart}>Close</button>

                {
                    cartCtx.items.length>0 &&  <button className='button'>Order</button>
                }
               
            </div>
        </Modal>
    )
};  

export default Cart;