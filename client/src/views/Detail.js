import '../App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";

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
            <h1 style={{textDecoration: "none"}}>Product Name: {product.title}</h1>
            <p>Product Price: ${product.price}</p>
            <p>Product Description: {product.description}</p>
            <p>Product ID: {product._id}</p>
            <p><Link to={"/products/"} className="form-link">Back to Form</Link></p>
        </div>
    )
}

export default Detail;
