import React from "react"
import { useParams } from "react-router-dom"

export default function ProductDetails(){
    const {id} = useParams(); 
    return(
        <h1>This is the producs {id} details</h1>
    )
}