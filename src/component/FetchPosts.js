import React from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

export default async (term = "posts") =>{
    const response = await axios.get(`${baseURL}${term}`);
    return response.data
}