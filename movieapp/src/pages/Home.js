import { useEffect } from "react"
import { ADD_FAVORITE, FILL_MOVIES } from "../shared/provider/GlobalProvider/types";
import { GetMovie } from "../service/movie";
import { useGlobalState } from "../shared/provider/GlobalProvider/useGlobalstate";
import MovieCard from "../feature/home/components/MovieCard";

const Home = () => {

    const { dispatch, state } = useGlobalState()
   // console.log(state)

    useEffect(() => {
        const refetch = async () => {
            const res = await GetMovie({ s: "titanic" });
            // console.log(res);

            dispatch({ type: FILL_MOVIES, payload: res.data.Search });

        };

        refetch();

    }, []);
    return (

        <div className="d-flex gap-3 flex-wrap ms-5 mt-5 mb-5">
            {state.movies?.map((movie, index) => <MovieCard key={"movie" + index} {...movie} onFav={() => dispatch({ type: ADD_FAVORITE, payload:movie })}/>)}
        </div>
    )
}

export default Home