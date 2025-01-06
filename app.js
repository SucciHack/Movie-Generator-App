const movieContainer = document.querySelector(".movieContainer")
const inputField = document.querySelector("input")
const searchBtn = document.querySelector("button")

async function fetchMovie(searchQuery){
    const response= await fetch(`https://www.omdbapi.com/?t=${searchQuery}&apikey=743ff126`)
    const movieData = await response.json()
    displayMovie(movieData)
}

searchBtn.addEventListener("click",()=>{
    const searchQuery = inputField.value
    fetchMovie(searchQuery)
    inputField.value = ""

})


function displayMovie(movieData){
    movieContainer.innerHTML = ""
    movieTemplate = `
    <div class="movieImage">
        <img src="${movieData.Poster}" alt="">
    </div>
    <div class="movieContent">
        <h3>Title: ${movieData.Title}</h3>
        <p>Year: ${movieData.Year}</p>
        <p>Release Date: ${movieData.Released}</p>
        <p>Runtime: ${movieData.Runtime}</p>
        <p>Genre: ${movieData.Genre}</p>
        <p>Director: ${movieData.Director}</p>
        <p>Writer: ${movieData.Writer}</p>
        <p>Actors: ${movieData.Actors}</p>
        <p>Plot: ${movieData.Plot}</p>
        <p>Awards: ${movieData.Awards}</p>
        <div class="ratings">
        <p>Ratings:<i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half"></i>
        <i class="fa-regular fa-star"></i></p>
    </div>
    </div>
    </div>

`
    movieContainer.insertAdjacentHTML("beforeend", movieTemplate)
}
