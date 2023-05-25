import { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const CartItem = ({id, name, price}) => {

    const {cartList, addToCart, removeFromCart} = useContext(ShopContext);
    const qty = cartList[id];
    return (
        <div className="cartItem">
                <h3>{name}</h3>
                <p>{price}</p>

                <button onClick={()=> removeFromCart(id)}> - </button>
                <p>QTY : {qty}</p>
                <button onClick={()=>addToCart(id)}> + </button>
                
                <h4>Subtotal : {qty * price}</h4>
        
        </div>
    )
};

export default CartItem;