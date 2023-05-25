import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import './mealItem.css';
import CartContext from '../../../store/cart-context';

const MealItem = ({name, description, price, id}) => {

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id,
            name,
            amount,
            price
        })
    };

    return (
       <li className='meal'>
            <div>
                <h3>{name}</h3>
                <div className='description'>{description}</div>
                <div className='price'>${price.toFixed(2)}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
       </li>
    )
};

export default MealItem;