let tmdbKey;
const tmdbBaseUrl = "https://api.themoviedb.org/3/";

// Initialize API key
const initializeApp = async () => {
  const response = await fetch('/api/key');
  const data = await response.json();
  tmdbKey = data.apiKey;
};
const playBtn = document.getElementById("playBtn");

const getGenres = async () => {
  const genreRequestEndpoint = "genre/movie/list";
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

  try {
    console.log(`urlToFetch: ${urlToFetch}`)
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(`jsonResponse: ${jsonResponse}`);
      const genres = jsonResponse.genres;
      console.log(`genres: ${genres}`);
      return genres;
    }
  } catch (error) {
    //console.error(error);
  }
};

const getMovies = () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = 'discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
};

const getMovieInfo = () => {};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }
};

initializeApp().then(() => getGenres()).then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
