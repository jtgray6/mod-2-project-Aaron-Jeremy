const params = new URLSearchParams(document.location.search)

const id = params.get('id')

const user_id = params.get('user_id')

const $section = document.querySelector('section')


fetch(`http://localhost:4000/styles/${id}`)
    .then(response => response.json())
    .then(style => {
        title = document.createElement('h2')
        title.innerText = `${style.name}s:`
        $section.append(title)
        style.beers.map (beer => {
            const beer_name = document.createElement('h3')
            beer_name.innerHTML = `<a href='http://localhost:3000/show_beer.html?id=${beer.id}&user=${user_id}'>${beer.name}</a>`
            $section.append(beer_name)
        })
    })