import React, { useState, useEffect } from "react";
import axios from "axios";


const ProductForm = () => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState();
    const [ description, setDescription ] = useState("");

    const eventHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    } //, []}

    return (
        <div>
            <form onSubmit={eventHandler}>
                <p>
                    <label>Title: </label>
                    <input type="text" onChange= {(e) => setTitle(e.target.value)}/>
                </p>
                <p>
                    <label>Price: </label>
                    <input type="float" onChange = {(e) => setPrice(e.target.value)}/>
                </p>
                <p>
                    <label>Description: </label>
                    <input type="text" onChange = {(e) => setDescription(e.target.value)}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default ProductForm;