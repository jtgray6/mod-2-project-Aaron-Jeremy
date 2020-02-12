const $select = document.querySelector('select')
const $section = document.querySelector('#cards')
const $greeting = document.querySelector('.login-greeting')
const $textarea = document.querySelector('#user_id')

const params = new URLSearchParams(document.location.search)
const user_id = params.get('id')

fetch(`http://localhost:4000/users/${user_id}`)
    .then(response => response.json())
    .then(userGreeting)

function userGreeting(user) {
    $greeting.innerText = `Hi, ${user.username}!`
    $textarea.innerText = user.id
}

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
        <h3><a href="http://localhost:3000/show_style.html?id=${review.beer.style.id}&user=${user_id}">${review.beer.style.name}</a></h3>
        <h3>${review.beer.brewery}</h3>
        <h2>${review.rating}</h2>
        <p>${review.description}</p>

        <a href="editreview.html?id=${review.id}&user=${user_id}"><button type="button">Edit</button></a>

        <form method="POST" action="http://localhost:4000/reviews/${review.id}">
            <input type="submit" value="Delete"/>
            <input type="hidden" name="_method" value="delete">
            <input type="hidden" name="user_id" value="${user_id}">
        </form>
    `

    return $card
}

{/* <form method="POST" action="http://localhost:4000/reviews/${review.id}">
            <input type="submit" value="Edit"/>
            <input type="hidden" name="_method" value="put">
</form> */}