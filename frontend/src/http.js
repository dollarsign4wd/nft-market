import axios from "axios";

const http = axios.create({
    // baseURL:"http://localhost:5000/api",
    baseURL:"https://dollarsign-nft-market.onrender.com/api",
    headers:{
        "content-type" :"application/json"
    }
});
export default http;