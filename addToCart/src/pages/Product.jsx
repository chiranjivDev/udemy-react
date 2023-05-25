import { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const Product = ({id, name, price}) => {

    const {addToCart, cartList}=useContext(ShopContext);

    const qty = cartList[id];
    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={()=>addToCart(id)} > + Add {qty > 0 && <>( {qty} )</>}</button>
        </div>
    )
};

export default Product;