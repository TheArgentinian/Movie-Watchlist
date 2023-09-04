const searchBox = document.getElementById("search-box")
const searchBtn = document.getElementById("search")

function submitMovie(){
    fetch(`http://www.omdbapi.com/?apikey=7006be1d&"&s=${searchBox.value}`)
    .then (response => response.json())
    .then (data => console.log(data))
}

submitMovie()