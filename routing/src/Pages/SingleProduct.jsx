import { useParams } from "react-router-dom";
import { products } from "../products";

const SingleProduct = () => {

    const {id} = useParams();
    const productId = Number(id);
    const product = products.find((p)=> productId === p.id);

    return <>
       {product.name}
    </>
};

export default SingleProduct;