import React from "react";

const ProductList = (props) => {
    return (
        <div>
            {props.products.map((product, index) => {
                return <p key={index}>{product.title}, {product.price}, {product.description}</p>
            })}
        </div>
    )
}

export default ProductList;