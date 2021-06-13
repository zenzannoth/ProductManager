import React, { useEffect, useState } from "react";
import axios from "axios";

const Detail = (props) => {
    const [product, setProduct] = useState({});
    useEffect (() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    })

    return (
        <div>
            <p>Product Name: {product.title}</p>
            <p>Product Price: ${product.price}</p>
            <p>PRoduct Description: {product.description}</p>
            <p>Product ID: {product._id}</p>
        </div>
    )
}

export default Detail;
