import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetails from "./CardDetails";

export default function SingleItem() {
    const [data,setdata]=useState([])
    let params=useParams()

    async function fetchSingleItem(id){
        try{
            let res=await fetch (`https://639b295bd5141501974d54b3.mockapi.io/bedrooms/${id}`)
            let data=await res.json()
            setdata(data)
            console.log(data)
        }catch(err){
            console.log("err")
        }
    }

    useEffect(()=>{
        fetchSingleItem(params.id)
    },[params.id])
    console.log(data)

    return (
        <>
            <CardDetails data={data}/>
        </>
    )

};
