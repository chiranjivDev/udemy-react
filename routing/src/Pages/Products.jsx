import { Link } from "react-router-dom";
import { products } from "../products";
const Products = () => {
    return <>
        <h3>Products Page</h3>
        {
            products.map((p)=>{
                return <h2 key={p.id}><Link to={`/products/${p.id}`}>{p.name}</Link></h2>
            })
        }
    </>
};

export default Products;