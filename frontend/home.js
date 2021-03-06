const $select = document.querySelector('select')
const $section = document.querySelector('#cards')
const $greeting = document.querySelector('.login-greeting')
const $textarea = document.querySelector('#user_id')
const $nav = document.querySelector('nav')

const params = new URLSearchParams(document.location.search)
const user_id = params.get('id')

// User Greeting

fetch(`http://localhost:4000/users/${user_id}`)
    .then(response => response.json())
    .then(userGreeting)

function userGreeting(user) {
    $greeting.innerHTML = `Hi, ${user.username}!<br>
    <a class="button-link" href="/"><button type="button">Log Out</button></a>`
    $textarea.innerText = user.id
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


// Style Options Generator

fetch("http://localhost:4000/styles")
    .then(response => response.json())
    .then(styleOptions)


function styleOptions(styles) {
    let $options = styles.map(styleToOption)
    $options.forEach(option => $select.append(option))
}

function styleToOption(style) {
    let $option = document.createElement('option')
    $option.textContent = style.name
    $option.value = style.id
    return $option
}

// Review Card Generator

fetch(`http://localhost:4000/reviews?id=${user_id}`)
    .then(response => response.json())
    .then(displayReviews)

function displayReviews(reviews) {
    let $reviews = reviews.map(displayReview)
    $reviews.forEach(review => $section.append(review))
}

function displayReview(review) {
    let $card = document.createElement('div')

    $card.innerHTML = `
        <h2><a href="http://localhost:3000/show_beer.html?id=${review.beer.id}&user=${user_id}">${review.beer.name}</a></h2>
        <h3>Style: <a href="http://localhost:3000/show_style.html?id=${review.beer.style.id}&user=${user_id}">${review.beer.style.name}</a></h3>
        <h3>${review.beer.brewery}</h3>
        <h2>${review.rating} Stars</h2>
        <p>${review.description}</p>

        <a class="button-link" href="editreview.html?id=${review.id}&user=${user_id}"><button type="button">Edit</button></a>

        <form method="POST" action="http://localhost:4000/reviews/${review.id}">
            <input type="submit" value="Delete"/>
            <input type="hidden" name="_method" value="delete">
            <input type="hidden" name="user_id" value="${user_id}">
        </form>
    `

    return $card
}