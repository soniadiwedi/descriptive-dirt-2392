import { Button } from "@chakra-ui/react";

export default function Pagination({page,setpage,total,settotal,noofbtn}) {
  
    


    return (
        <>
        <Button  isDisabled={page==1} onClick={(e)=>setpage(page-1)}>Previous</Button>
        {
            noofbtn.map((e)=>{
                return <Button onClick={()=>setpage(e)} >{e}</Button>
            })
        }
        <Button isDisabled={page===Math.ceil(total/6)} onClick={(e)=>setpage(page+1)}>Next</Button>
        </>
    )
};
