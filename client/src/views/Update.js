import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "@reach/router";

const Update = (props) => {
    const { id } = props;
    const [ title, setTitle ] = useState ();
    const [ price, setPrice ] = useState ();
    const [ description, setDescription ] = useState();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/" + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res)
            );
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Item: </label>
                    <input type="text" name="title" value={ title }
                    onChange={(e) => { setTitle(e.target.value) }} /> 
                </p>
                <p>
                    <label>Price: </label>
                    <input type="float" name="price" value={ price }
                    onChange={(e) => { setPrice(e.target.value) }} /> 
                </p>
                <p>
                    <label>Description: </label>
                    <input type="text" name="description" value={ description }
                    onChange={(e) => { setDescription(e.target.value) }} /> 
                </p>
                <input type="submit" />
            </form>
            <p><Link to={"/products/"} className="form-link">Back to Form</Link></p>
        </div>
    )
}

export default Update;