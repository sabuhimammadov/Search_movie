import axios from 'axios';
import { baseURL } from '../constant/baseUrl';


 export const myAxios = axios.create({
  baseURL,
    params:{
        apikey:"b5307c1f"

    }
 })