const watchlistEl = document.getElementById("main")
const watchlistEmpty = document.getElementById("watchlist-empty")
let summaryHTML = ""


renderWatchlist()       

function renderWatchlist() {
    let movies = []
    let keys = Object.keys(localStorage)
    let i = keys.length
    while (i--) {
        movies.push(JSON.parse(localStorage.getItem(keys[i])))
    }

    if (movies.length == 0) {
        summaryHTML = `
            <div >
                <div class="empty">
                <p id="add-movies"> Your watchlist is empty...</p>
                <p class="watchlist-btn"> Let's add some movies!
                <a class="index-link" href="./index.html"><img src="./img/Add.png"/></a> <p>
                </div>
            </div>
        `
    }
    
    else {

    for (let i = 0; i < movies.length; i++) {
        let data = movies[i]
        summaryHTML += `
                            <div id="search-result" class="search-result">
                                <img src="${data.Poster}" class="poster" />
                                <div class="movie-info">
                                    <div class="first-row">
                                        <h2 class="title">${data.Title} (${data.Year})</h2>
                                        <img src="./img/Star.png" class="star" />
                                        <p class="rating">${data.imdbRating}</p>
                                    </div>
                                    <div class="second-row">
                                        <p class="time">${data.Runtime}</p>
                                        <p class="genre">${data.Genre}</p>
                                        <img src="./img/Remove.png" id="add-btn" onclick="remove('${data.Title}')" />
                                        <p class="watchlist-btn">Remove<p>
                                    </div>
                                    <p class="description">${data.Plot}</p>
                                </div>
                            </div>
                        `
                    }
                }
                watchlistEl.innerHTML = summaryHTML
}

function remove(title){
    localStorage.removeItem(title)
    location.reload()
}

