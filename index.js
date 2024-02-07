let message = document.querySelector(`aside`)

const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector(`input`)
    let movie = document.createElement(`li`)
    let movieTitle = document.createElement(`span`)
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener(`click`, crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement(`button`)
    deleteBtn.textContent = `X`
    deleteBtn.addEventListener(`click`, deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector(`ul`).appendChild(movie)
    inputField = ``
}

const deleteMovie = event => {
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.childNodes[0].textContent} Deleted!`
    revealMessage()
}

const crossOffMovie = event => {
    event.target.classList.toggle(`checked`)
    if (event.target.classList.contains(`checked`)){
        message.textContent = `${event.target.textContent} Watched!`
    } else {
        message.textContent = `${event.target.textContent} Added Back`
    }
    revealMessage()
}

document.querySelector(`form`).addEventListener(`submit`, addMovie)

function revealMessage(){
    message.classList.remove(`hide`)
    setTimeout(() => message.classList.add(`hide`), 1000)
}


