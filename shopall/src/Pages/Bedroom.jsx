import { Grid, Box, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Components/Pagination";
import Footers from "./Footer";
import FunctionSort from "./FunctionSort";

import SingleProduct from "./SingleProduct";

function getCurrentPageUrl(value) {
  value = Number(value);
  if (typeof value === "number" && value <= 0) {
    value = 1;
  }
  if (!value) {
    value = 1;
  }
  return value;
}

export default function Bedroom() {
  const [data, setdata] = useState([]);
  const [param, setparam] = useSearchParams();
  const [page, setpage] = useState(getCurrentPageUrl(param.get("query")) || 1);
  const [total, settotal] = useState(1);
  const [filter, setfilter] = useState("");
  const [searchApi, setSearchApi] = useState([]);
  const[order,setorder]=useState("asc");

  

  async function NoofPro() {
    try {
      let res = await fetch(
        `https://639b295bd5141501974d54b3.mockapi.io/bedrooms`
      );
      let data = await res.json();
      settotal(data.length);
    } catch (err) {
      console.log("err");
    }
  }
//////////////////////////////////////////////////////////////////////////////////
  async function fetchData(page,order) {
    try {
      let res = await fetch(
        `https://639b295bd5141501974d54b3.mockapi.io/bedrooms?page=${page}&limit=6&sortBy=price&order=${order}`
      );
      let data = await res.json();
      setdata(data);
      setSearchApi(data);
    } catch (err) {
      console.log("err");
    }
  }
  ///////////////////////////////////////////////////////////////////////////////
  const noofbtn = new Array(total);
  for (let i = 1; i <= Math.ceil(total / 6); i++) {
    noofbtn[i] = i;
  }
  /////////////////////////////////////////////////////
  useEffect(() => {
    fetchData(page,order);
    NoofPro();
  }, [page,order]);

  useEffect(() => {
    let paramobj = { query: page };
    setparam(paramobj);
  }, [page]);

  /////////////////////////////////////////////////////////
  function handleSearch(e) {
    if (e.target.value == "") {
      setdata(searchApi);
    } else {
      const result = searchApi.filter((item) =>
        item.category.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setdata(result);
    }
    setfilter(e.target.value);
  }
 //////////////////////////////////////////////////////



  return (
    <>
      <Box margin="auto" width="30%">
        <Input
          placeholder="Search"
          value={filter}
          onChange={(e) => handleSearch(e)}
        />
      </Box>
      <Box margin="auto" width="92%" marginBottom="20px">
        <FunctionSort setorder={setorder} />
      </Box>
      <Grid templateColumns="repeat(3, 1fr)">
        {data.map((e) => {
          return (
            <div key={e.id}>
              <SingleProduct {...e} el={e} />
            </div>
          );
        })}
      </Grid>

      <Box marginLeft="40%" justifyContent="center">
        <Pagination
          total={total}
          settotal={settotal}
          page={page}
          setpage={setpage}
          noofbtn={noofbtn}
        />
      </Box>

      <Footers />
    </>
  );
}
