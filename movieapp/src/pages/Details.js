import { Link, useParams } from "react-router-dom";
import { GetMovieId } from "../service/movie";
import { useGlobalState } from "../shared/provider/GlobalProvider/useGlobalstate"
import { Show_Details } from "../shared/provider/GlobalProvider/types";
import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { BsStar } from 'react-icons/bs';

const Details = () => {
    const { movie_id } = useParams();
    // console.log("a",movie_id)
    const { state: { details }, dispatch } = useGlobalState()
    useEffect(() => {
        const refetch = async () => {
            const res = await GetMovieId(movie_id);
            // console.log("res",res);

            dispatch({ type: Show_Details, payload: res.data });

        };
        console.log(details)

        refetch();

    }, []);

    return (
        <>
            <Link to={"../"} className="btn btn-warning  mt-5" style={{ marginLeft: "130px" }}>Go Back</Link>
            {!details.length && (
                <div className="d-flex  flex-wrap mt-5 gap-5 ms-5 mx-auto text-white mb-5" style={{ marginLeft: "130px" }}>
                    <img src={details.Poster} />
                    <ul >

                        <li className="h4">Title:{details.Title}</li>

                       
                            <li className="h5">Actors:{details.Actors}</li>
                            <li className="h5">Director:{details.Director}</li>
                            <li className="h5">Language:{details.Language}</li>
                            <li className=" h5">Rating:{details.imdbRating}<BsStar className="ms-2 mb-1" style={{ color: "yellow" }} /></li>
                            <li className="h5">Year:{details.Year}</li>
                      
                    </ul>
                </div>
            )}

        </>
    )
}
export default Details