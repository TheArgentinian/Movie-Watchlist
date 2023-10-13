const searchBox = document.getElementById("search-box")
const searchBtn = document.getElementById("search-btn")
const mainPostEl = document.getElementById("main")
const addMovie = document.getElementById("add-btn")
const watchlistPage = document.getElementById("watchlist")
let watchlistArr = []

function addMovieToWatchlist(imdbId) {
    fetch(`https://www.omdbapi.com/?i=${imdbId}&apikey=7006be1d`)
    .then (res => res.json())
    .then (data => localStorage.setItem(data.Title, JSON.stringify(data)))
}

searchBtn.addEventListener("click", function(e) {
    e.preventDefault()
    fetch(`http://www.omdbapi.com/?apikey=7006be1d&"&s=${searchBox.value}`)
    .then (res => res.json())
    .then (data => {
        if (data.Response === "False") {
            summary.innerHTML = `
                <p class="no-results">Unable to find what you're looking for. Please try another search.</p>
            `
            return
        }
        
        let summaryHTML = ""
        let searchList = data.Search.map(movie => movie.Title)
        for (let i = 0; i < searchList.length; i++) {
            fetch(`https://www.omdbapi.com/?t=${searchList[i]}&apikey=7006be1d`)
                .then(res => res.json())
                .then(data => {
                    summaryHTML += `
                            <div id="recommendations" class="recommendations">
                                <img src="${data.Poster}" class="poster" />
                                <div class="movie-info-container">
                                    <div class="first-row">
                                        <h2 class="title">${data.Title}</h2>
                                        <img src="./img/Star.png" class="star" />
                                        <p class="rating">${data.imdbRating}</p>
                                    </div>
                                    <div class="second-row">
                                        <p class="time">${data.Runtime}</p>
                                        <p class="genre">${data.Genre}</p>
                                        <img src="./img/Add.png" id="add-btn" onclick='addMovieToWatchlist("${data.imdbID}")'/>
                                        <p class="watchlist-btn">Add to watchlist<p>
                                    </div>
                                    <p class="description">${data.Plot}</p>
                                </div>
                            </div>
                        `
                        mainPostEl.innerHTML = summaryHTML
                    })
        }
    })
})


 
    /*   let watchlistMovies = JSON.parse(localStorage.getItem('watchlist')) || []
  if(watchlistMovies.some(item => item.Title === data.Title)) {
    alert('Movie ALREADY added!')
  }
  else{
    watchlistMovies.unshift(data)
    localStorage.setItem('watchlist', JSON.stringify(watchlistMovies))
    alert('Movie ADDED to Watchlist!')
  } */



/* function add(title) {
    fetch(`https://www.omdbapi.com/?t=${title}&apikey=cf0fdf8`)
        .then(res => res.json())
        .then(data => {
            window.localStorage.setItem(data.Title, JSON.stringify(data))
            watchlistArr.push(data.Title)
        })
} */