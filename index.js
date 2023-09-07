const searchBox = document.getElementById("search-box")
const searchBtn = document.getElementById("search-btn")
const mainPostEl = document.getElementById("main")


searchBtn.addEventListener("click", function(){
    fetch(`http://www.omdbapi.com/?apikey=7006be1d&"&s=${searchBox.value}`)
    .then (response => response.json())
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
            fetch(`https://www.omdbapi.com/?t=${searchList[i]}&apikey=cf0fdf8`)
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
                                        <img src="./img/Add.png" class="add-btn" onclick="add('${data.Title}')" />
                                        <p class="watchlist-btn">Watchlist<p>
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
