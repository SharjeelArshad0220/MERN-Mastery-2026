const API_KEY = "8ccdd5462b8312deb7c49289201f7656";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500"; // w500 matlab size 500px
const trendingUrl = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
/*-
*******************************
future enhancements ke liye kuch aur endpoints bhi ready rakhte hain
*******************************
// const popularUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
// const upcomingUrl = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
// const topRatedUrl = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
*/
const sectionTitle = document.getElementById('section-title');
const searchInput = document.getElementById("search-input");
const movieGrid = document.getElementById('movie-grid');
const modal = document.getElementById('movie-modal');
export function modalHtmlUpdate(movieDetails) {
    const modalImage = document.getElementById('modal-img');
    modalImage.src = `${IMG_URL}${movieDetails.poster_path}`;
    const modalTitle = document.getElementById('modal-title');
    modalTitle.textContent = movieDetails.title;
    const modalTagline = document.getElementById('modal-tagline');
    modalTagline.textContent = movieDetails.tagline;
    const modalRating = document.getElementById('modal-rating');
    modalRating.textContent = `⭐ ${movieDetails.vote_average.toFixed(1)}`;
    const modalRuntime = document.getElementById('modal-runtime');
    modalRuntime.textContent = `⏱️ ${movieDetails.runtime} min`;
    const modalYear = document.getElementById('modal-year');
    modalYear.textContent = movieDetails.release_date ? `📅 ${movieDetails.release_date.substring(0, 4)}` : "📅 N/A";
    const modalGenres = document.getElementById('modal-genres');
    modalGenres.innerHTML = movieDetails.genres || [].map(genre => `<span class="btn-outline">${genre.name}</span>`).join('');
    const modalPlot = document.getElementById('modal-plot');
    modalPlot.textContent = movieDetails.overview;
    // YouTube Trailer Link
    const trailerBtn = document.querySelector('.btn-link.yt');
    trailerBtn.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(movieDetails.title + ' trailer')}`;
    trailerBtn.title = `Watch ${movieDetails.title} trailer on YouTube`;
    trailerBtn.target = "_blank"; // Open in new tab

    // Netflix Search Link
    const netflixBtn = document.querySelector('.btn-link.nf');
    netflixBtn.href = `https://www.netflix.com/search?q=${encodeURIComponent(movieDetails.title)}`;
    netflixBtn.target = "_blank"; // Open in new tab
    netflixBtn.title = `Search ${movieDetails.title} on Netflix`;

    // Amazon Prime Search Link
    const primeBtn = document.querySelector('.btn-link.amz');
    primeBtn.href = `https://www.amazon.com/s?k=${encodeURIComponent(movieDetails.title + ' movie')}&i=instant-video`;
    primeBtn.target = "_blank"; // Open in new tab
    primeBtn.title = `Search ${movieDetails.title} on Amazon Prime`;
    modal.classList.remove('hidden');
}
export function showFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favoritesHtml = renderMovies(favorites, "No favorite movies found");
    sectionTitle.textContent = "Your Favorites";
    movieGrid.innerHTML = favoritesHtml;
}
export function renderMovies(moviesArray, errorMessage = "No movies found") {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (moviesArray.length === 0) {
        return `
<div class="empty-state">
    <i class="fas fa-film fa-5x"></i>
    <h3>${errorMessage}</h3>
</div>
`;
    }
    const moviesArrayHtml = moviesArray.map((movie) => {
        const isFavorite = favorites.some(fav => fav.id == movie.id);
        const heartClass = isFavorite ? "fas fa-heart" : "far fa-heart";
        let imageUrl = "";
        if (movie.poster_path) {
            imageUrl = movie.poster_path.startsWith("http") ? movie.poster_path : `${IMG_URL}${movie.poster_path}`;
        }
        else { imageUrl = "no-image.png"; }
        const cardHtml = `
    <div class="movie-card" data-id="${movie.id}">
        <div class="card-img-wrapper">
            <img src="${imageUrl}" alt="${movie.title}">
            <button class="fav-btn" id="fav-btn" title="Add to Favorites"><i class="${heartClass} fa-heart"></i></button> 
        </div>
        <div class="card-info">
            <h4>${movie.title}</h4>
            <p>⭐ ${Number(movie.vote_average).toFixed(1)}</p>
        </div>
    </div>
`;
        return cardHtml;
    });
    return moviesArrayHtml.join('');
}
export async function getMovieDetails(movieId) {
    const movieUrl = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
    const details = await fetchApiData(movieUrl);
    return details[0];
}
export async function handleSearch() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm.length > 1) {
        const searchUrl = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchTerm}`;
        const spinner = document.getElementById("loading-spinner");
        spinner.classList.remove("hidden");
        const data = await fetchApiData(searchUrl);
        searchInput.value = '';
        const movies = data[0].results;
        const moviesHtml = renderMovies(movies, `No results found for "${searchTerm}"`);
        spinner.classList.add('hidden');

        sectionTitle.textContent = `Search Results for "${searchTerm}"`;
        movieGrid.innerHTML = moviesHtml;
    }
    else {
        searchInput.value = '';
        alert("Please enter at least 2 characters to search.");

    }
}
export function handleModalClick(event) {
    const closeModal = document.getElementById('close-modal');
    if (event.target.matches("#close-modal")) {
        modal.classList.add('hidden');
    }
    else if (event.target.id === 'movie-modal') {
        modal.classList.add('hidden');
    }
}
export function toggleFavorite(card) {
    // 1. Data waisa nikalo jaisa API deti hai
    const id = card.dataset.id; // 'movieId' -> 'id'
    const title = card.querySelector("h4").innerText;

    // Rating mein se '⭐ ' hata dete hain taake sirf number bache (API style)
    const vote_average = card.querySelector("p").innerText.replace("⭐ ", "");

    // Image URL poora hai, isay 'poster_path' bolenge
    const poster_path = card.querySelector("img").src;

    // 2. Object banao API keys ke sath
    const movieData = { id, title, vote_average, poster_path };
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const newLIST = favorites.filter(movie => movie.id !== id);
    if (favorites.length === newLIST.length) {
        card.querySelector(".fav-btn i").classList.replace("far", "fas");
        favorites = [...favorites, movieData];
    } else {
        card.querySelector(".fav-btn i").classList.replace("fas", "far");
        favorites = newLIST;
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
}
export async function handleCardClick(event) {
    // 1. Click kiye gaye element se upar ja kar .movie-card dhundhein
    const clickedCard = event.target.closest('.movie-card');
    // 2. Agar card mil jaye toh uska data-id nikal lein
    if (clickedCard) {
        if (event.target.closest('.fav-btn')) {
            toggleFavorite(clickedCard);
        }
        else {
            const movieId = clickedCard.dataset.id;
            const movieDetails = await getMovieDetails(movieId);
            modalHtmlUpdate(movieDetails);
        }
    }
}
export async function startApp() {
    const moviesData = await fetchApiData(trendingUrl);
    const trendingMovies = moviesData[0].results;
    const trendingMoviesHtml = renderMovies(trendingMovies, "No trending movies found");
    sectionTitle.textContent = "Trending Movies";
    movieGrid.innerHTML = trendingMoviesHtml;
}
export async function fetchApiData(...urls) {
    const fetchCalls = urls.map(url => fetch(url));
    try {
        const responses = await Promise.all(fetchCalls);
        const convertJson = responses.map((response) => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
            return response.json();
        });
        const data = await Promise.all(convertJson);
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
};