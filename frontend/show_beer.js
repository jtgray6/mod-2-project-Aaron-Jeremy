const $beerSection = document.querySelector('#beer-info')
const $greeting = document.querySelector('.login-greeting')

const params = new URLSearchParams(document.location.search)
const user_id = params.get('user')
const id = params.get('id')

// Get user info and greet them
fetch(`http://localhost:4000/users/${user_id}`)
    .then(response => response.json())
    .then(userGreeting)

function userGreeting(user) {
    $greeting.innerText = `Hi, ${user.username}!`
}

// get beer info
fetch(`http://localhost:4000/beers/${id}`)
    .then(response => response.json())
    .then(displayBeerInfo)

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