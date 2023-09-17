import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineHeart } from '../../../assents/icons';
import { FiHeart } from 'react-icons/fi';
import { useGlobalState } from '../../../shared/provider/GlobalProvider/useGlobalstate';
function MovieCard({ Title, Year, imdbID, Poster, onFav }) {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { state: { favorite } } = useGlobalState()
    const isFavorite = favorite.findIndex((item) => item.imdbID === imdbID) !== -1
    const isFavPage = pathname.includes("/favorite")
  //  console.log(isFavPage)
    return (
        <Card style={{ width: '18rem', position: "relative" }}>
            <Card.Img variant="top" src={Poster} height={"280px"} />
            <Card.Body>
                <Card.Title>{Title}</Card.Title>
                <Card.Text>

                    Year: {Year}
                </Card.Text>
             {imdbID && <Button variant="danger" className='mt-3' onClick={() => navigate(`/movies/${imdbID}`)}>More Info</Button>}   
            </Card.Body>
            {!isFavPage && 
                <div style={{ position: "absolute", top: 0, right: "10px", cursor: "pointer" }} onClick={onFav}>
                    {isFavorite ? <AiOutlineHeart /> : <FiHeart style={{ width: "2rem", height: "2rem", color: "red" }} />}
                </div>
            }

        </Card>
    );
}

export default MovieCard;