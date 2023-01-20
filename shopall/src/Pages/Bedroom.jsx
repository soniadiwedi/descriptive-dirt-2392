import { Grid } from "@chakra-ui/react"
import { useEffect, useState } from "react"


import SingleProduct from "./SingleProduct"
export default function Bedroom() {

    const [data,setdata]=useState([])

    async function fetchData(){
        try{
            let res= await fetch(`https://639b295bd5141501974d54b3.mockapi.io/bedrooms`)
            let data=await res.json()
            setdata(data)
             console.log(data)   

        }catch(err){
            console.log("err")
        }
    }

    useEffect(()=>{
        fetchData()
    },[])


    return<>


        <Grid templateColumns='repeat(4, 1fr)'>
        {
                 data.map((e)=>{
                    return <div key={e.id}  >
                            <SingleProduct {...e}/>
                    </div>
                 })

            }
        </Grid>
    
     
           
    
    </>


};
