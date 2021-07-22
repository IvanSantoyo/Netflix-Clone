const API_KEY = "8b499063f7ac0a66ddb718c7923756e5"


const requests = {
    fetchTrending: `/trending/all/wek?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key${API_KEY}&language=en-US`,
    feathcActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fethcHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocuments: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;