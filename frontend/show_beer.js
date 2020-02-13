const $beerInfo = document.querySelector('#beer-info')
const $beerList = document.querySelector('#beer-list')
const $greeting = document.querySelector('.login-greeting')
const $nav = document.querySelector('nav')
const $textarea = document.querySelector('textarea')

const params = new URLSearchParams(document.location.search)
const user_id = params.get('user')
const id = params.get('id')
const search = params.get('search')

// Get user info and greet them
fetch(`http://localhost:4000/users/${user_id}`)
    .then(response => response.json())
    .then(userGreeting)

function userGreeting(user) {
    $greeting.innerText = `Hi, ${user.username}!`
    $textarea.innerText = user_id

}

function generateNavBar() {
    let $ul = document.createElement('ul')
    $ul.style.listStyleType = "none"

    $ul.innerHTML = `
        <a href="http://localhost:3000/home.html?id=${user_id}"><li>Home</li></a>
        <a href="http://localhost:3000/show_beer.html?user=${user_id}"><li>Beers</li></a>
        <a href="http://localhost:3000/show_style.html?user=${user_id}"><li>Styles</li></a>
    `
    $nav.appendChild($ul)
}
generateNavBar()

// get beer info
if (id != null) {
    fetch(`http://localhost:4000/beers/${id}`)
        .then(response => response.json())
        .then(displayBeerInfo)
} else if (search != null) {
    fetch(`http://localhost:4000/beers?search=${search}`)
        .then(response => response.json())
        .then(listBeers)
}else {
    fetch("http://localhost:4000/beers")
        .then(response => response.json())
        .then(listBeers)
} 

// Displays a list of beer cards if there is no id is initially given

function listBeers(beers) {
    let $h2 = document.createElement('h2')
    $h2.innerText = "Please select a beer:"
    $h2.style.backgroundColor = "white"
    $h2.style.padding = "1rem"
    $h2.style.borderRadius = "5px"
    $beerInfo.prepend($h2)

    beers.map( beer => {
        let $card = document.createElement('a')
        $card.href = "http://localhost:3000/show_beer.html?id=${beer.id}&user=${user_id}"

        $card.className = "beer"
        $card.innerHTML = `
            <h3>${beer.name}</h3>
            <h4>${beer.brewery}</h4>
        `

        $beerList.appendChild($card)
    })
}



// Displays Beer name in h1, Style as h3, and then lists cards
function displayBeerInfo(beer) {
    let $h1 = document.createElement('h1')
    $h1.innerText = beer.name

    let $h2 = document.createElement('h2')
    $h2.innerText = beer.brewery

    let $h3 = document.createElement('h3')
    $h3.innerHTML = `Beer Style: <a href="http://localhost:3000/show_style.html?id=${beer.style.id}&user=${user_id}">${beer.style.name}</a>`

    $beerSection.append($h1, $h2, $h3)
    $cards = beer.reviews.map(displayReview)
    $cards.forEach(review => $beerSection.append(review))
}

function displayReview(review) {
    let $card = document.createElement('div')

    $card.innerHTML = `
        <h2>${review.user.username} says:</h2>
        <h2>${review.rating} Stars</h2>
        <p>${review.description}</p>
    `

    return $card
}