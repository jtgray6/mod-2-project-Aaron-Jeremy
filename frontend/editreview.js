const params = new URLSearchParams(document.location.search)

const id = params.get('id')

const user_id = params.get('user')
const $greeting = document.querySelector('.login-greeting')
const $nav = document.querySelector('nav')

// Get user info and greet them
fetch(`http://localhost:4000/users/${user_id}`)
    .then(response => response.json())
    .then(userGreeting)

function userGreeting(user) {
    $greeting.innerHTML = `Hi, ${user.username}!<br>
    <a href="/"><button type="button">Log Out</button></a>`
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

fetch(`http://localhost:4000/reviews/${id}`)
    .then(response => response.json())
    .then(review => {
        const $form = document.createElement('form')
        $form.method = "POST"
        $form.action = `http://localhost:4000/reviews/${id}`
        $form.className = "createReview"
        $form.id = "editReview"
        $form.innerHTML = `
            <h2>Edit Review</h2>
            <label for="description">Description</label>
            <textarea id="description" name="description" wrap="soft" placeholder="Write your Review here!">${review.description}</textarea>
            <label for="rating">Rating</label>
            <input id="rating" name="rating" type="number" step="0.1" min="0" max="5" placeholder="Number of Stars (0-5)" value="${review.rating}">
            <textarea id="user_id" name="user_id" hidden>${user_id}</textarea>
            <input type="submit" value="Update Review">
            <input type="hidden" name="_method" value="put">
        `
        document.body.append($form)
    })
