import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import products from '../products';
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cartList, getTotalAmount} = useContext(ShopContext);
    const totalAmount = getTotalAmount();
    
    const totalQty = Object.values(cartList).reduce((total, v)=>{
        total += v
        return total;
    },0)
    
    return (
        <>
            <h3>your cart</h3>
            <hr/>
            <br/>
            {
                totalQty === 0 && <h3>is empty!</h3>
            }
            {
                products.map((product)=>{
                    if(cartList[product.id] > 0){
                        return <CartItem {...product} key={product.id}/>
                    }
                })
            }

            <hr/>
            <br/>
            <Link to='/'>Continue Shopping</Link>
            <h3 style={{textAlign:"right", marginRight:"130px"}}>Total : $ {totalAmount.toFixed(2)} </h3>

        </>
    )
};  

export default Cart;
