import { handleCardClick,handleSearch,handleModalClick,startApp,showFavorites, } from "./utility.js";
const movieGrid = document.getElementById('movie-grid');
const modal = document.getElementById('movie-modal');
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const favoritesBtn = document.getElementById("tab-favorites");
const homeBtn = document.getElementById("tab-home");
movieGrid.addEventListener('click', handleCardClick);
modal.addEventListener('click', handleModalClick);
// 1. Button pe Click karna
searchBtn.addEventListener('click', handleSearch);
// 2. Input box mein Enter key dabana
searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});
favoritesBtn.addEventListener('click', showFavorites);
homeBtn.addEventListener('click', startApp);
startApp();