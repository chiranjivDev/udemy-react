import products from '../products';
import Product from './Product';
const Products = () => {

    return (
        <>
            <h1>Products Page</h1>
            <br/>
            <hr/>
            {
                products.map((p)=>{
                    return <Product key={p.id} {...p}/>
                }) 
            }
        </>
    )
};  

export default Products;