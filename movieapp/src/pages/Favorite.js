import MovieCard from "../feature/home/components/MovieCard"
import { ADD_FAVORITE } from "../shared/provider/GlobalProvider/types"
import { useGlobalState } from "../shared/provider/GlobalProvider/useGlobalstate"

const Favorite = () =>{
    const {  state:{favorite},dispatch } = useGlobalState()
    console.log(favorite.length)
    if(favorite.length ==0){
        return (
            <div className="d-flex flex-wrap justify-content-center align-items-center mt-5" style={{color:"green",fontSize:"24px"}}>Sorry, there is no favorite movie</div>
        )
}
    return(
       
        <div className="d-flex gap-3 flex-wrap ms-5 mt-5 mb-5">
           
        {favorite?.map((movie, index) => <MovieCard key={"movie" + index} {...movie} onFav={() => dispatch({ type: ADD_FAVORITE, payload:movie })} />)}
    </div>    )
}
export default Favorite