const params = new URLSearchParams(document.location.search)
const id = params.get('id')
const user_id = params.get('user')
const $greeting = document.querySelector('.login-greeting')
const $section = document.querySelector('section')
const $nav = document.querySelector('nav')

fetch(`http://localhost:4000/users/${user_id}`)
    .then(response => response.json())
    .then(userGreeting)

function userGreeting(user) {
    $greeting.innerHTML = `Hi, ${user.username}!<br><br>
    <a href="/"><button type="button">Log Out</button></a>`
    $textarea.innerText = user.id
}

if (id != null) {
    fetch(`http://localhost:4000/styles/${id}`)
        .then(response => response.json())
        .then(style => {
            const title = document.createElement('h2')
            const description = document.createElement('h4')
            const beers_head = document.createElement('h2')
            description.innerText = `${style.description}`
            description.className = "style_desc"
            title.innerText = `${style.name} Info:`
            title.className = "style_title"
            beers_head.innerText = "Beers of this Style:"
            beers_head.className = "beers_head"
            $section.append(title, description, beers_head)
            style.beers.map (beer => {
                const beer_name = document.createElement('li')
                beer_name.innerHTML = `<a href='http://localhost:3000/show_beer.html?id=${beer.id}&user=${user_id}'>${beer.name}</a>`
                beer_name.className = "style_beer"
                $section.append(beer_name)
            })
            const image = document.createElement('img')
            image.src = `${style.image_url}`
            $section.append(image)
        })
    }
else {
    fetch('http://localhost:4000/styles')
        .then(response => response.json())
        .then(styles => {
            styles.map (style => {
                const style_name = document.createElement('h2')
                style_name.innerHTML = `<a href='http://localhost:3000/show_style.html?id=${style.id}&user=${user_id}'>${style.name}</a>`
                $section.append(style_name)
            })
        })
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