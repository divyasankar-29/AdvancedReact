import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Display(){
    const { id } = useParams();
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const [product,setProduct] = useState(null);
    let display = null

    useEffect(() => {
        axios.get(url)
        .then(response => {
            setProduct(response.data)
        })
    } , [url])

    if(product){
        display = 
        <div>
            <b>{product.title.toUpperCase()}</b><br />{product.body}
        </div>
    }
    return(
        <div>
            {display}
        </div>
    )
}
export default Display