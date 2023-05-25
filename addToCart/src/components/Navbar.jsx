import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../context/shopContext";

const Navbar = () => {

    const {cartList}= useContext(ShopContext);

    // Calculate total number of items in cart
    let arr=Object.values(cartList);
    const totalQty = arr.reduce((total, v)=>{
        total += v;
        return total;
    }, 0)

    return (
        <nav>
            <NavLink to='/'>Products</NavLink>
            <NavLink to='/cart' style={{ marginLeft:"32px"}}>Cart ({`${totalQty}`})</NavLink>
        </nav>
    )
};

export default Navbar;