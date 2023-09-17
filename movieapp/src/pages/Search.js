import { SearchInfo } from "./search/SearchInput";
import { useGlobalState } from "../shared/provider/GlobalProvider/useGlobalstate";
import MovieCard from "../feature/home/components/MovieCard";
import { ADD_FAVORITE } from "../shared/provider/GlobalProvider/types";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
};

const Search = () => {
    const { state, dispatch } = useGlobalState();
    console.log("movies", state.moviesSearch);

    return (
        <div className="mt-5">
            <SearchInfo />
        {state.moviesSearch === undefined && <h1 className="text-danger text-center mt-5" style={{fontSize:"24px"}}>No movies found</h1>} 
            <div className="d-flex gap-3 flex-wrap ms-5 mt-5 mb-5">



                {state.moviesSearch?.map((movie, index) => {
                    return (
                        <MovieCard
                            key={"movie" + index}
                            {...movie}
                            onFav={() => dispatch({ type: ADD_FAVORITE, payload: movie })} // Missing closing parenthesis
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Search;
