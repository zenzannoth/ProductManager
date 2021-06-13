import '../App.css';
import React from "react";
import { Link } from "@reach/router";

const ProductList = (props) => {
    return (
        <div>
                {props.products.map((product, index) => {
                    return <p key={index}><Link to={`/products/${product._id}`} className="product-link">{product.title}</Link>, {product.price}, {product.description}</p>
                })}
        </div>
    )
}

export default ProductList;