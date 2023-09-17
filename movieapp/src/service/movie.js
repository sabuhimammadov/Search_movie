import { myAxios } from "../shared/helper/instanceAxious"




export const GetMovie = (params) => {
console.log(params)
   return myAxios({ method: "GET", url:"?i=tt3896198", params })
   }

   export const GetSearchMovie = (searchTitle)=> {
      return myAxios({method:"GET", url:"?i=tt3896198",params:{s:searchTitle}})
   }

   export const GetMovieId = (id) =>{
      return myAxios({ method: "GET", params: {i: id }});

   }
 