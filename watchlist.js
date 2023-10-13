const watchlistEl = document.getElementById("watchlist")

function renderWatchlist() {
    const watchlistItems = JSON.parse(localStorage.getItem("watchlist")) || []
      console.log(watchlistItems)
    if (watchlistItems.length === 0) {
        return watchlistEl.innerHTML = "Your watchlist is empty."  
    }

    else{
        watchlistEl.innerHTML = ""

  watchlistItems.forEach(movie => {
    console.log(movie)
    const watchlistMovieElement = `
    <div class="movie-container">
    <img class="movie-poster" src="${movie.Poster !== 'N/A' ? movie.Poster : 'images/no_image_placeholder.png'}">
    <div class="movie-body">
        <div class="movie-header">
            <h3 class="movie-title">${movie.Title}
            <span class="release-year">${movie.Year}</span>
            </h3>
            <span class="star-icon">
            <i class="fa-solid fa-star fa-xs"></i>
            </span>
            <span><p class="rating">${movie.imdbRating}</p></span>
        </div>
        <div class="movie-info">
            <p class="runtime">${movie.Runtime}</p>
            <p class="genre">${movie.Genre}</p>
            <div class="remove">
                <a class="remove-watchlist">
                    <i class="fa fa-minus-circle remove-watchlist-btn"></i>
                    <p class="remove-watchlist-text">Remove</p>
                </a>
            </div>
        </div>
        <div class="movie-description">
            <p class="movie-plot">${movie.Plot}</p>
            <a class="read-more">Read More</a>
            <a class="read-less">Read Less</a>
        </div>
    </div>
</div>
    `
    watchlistContainerElement.innerHTML += watchlistMovieElement

    })
    }
}

