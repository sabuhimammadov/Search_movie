export const GetMovie = (movieTitle) => {
    console.log(movieTitle)
    const movieEndPoint = `https://www.omdbapi.com/?i=tt3896198&apikey=b5307c1f&t=${movieTitle}`;

    return fetch(movieEndPoint);
}