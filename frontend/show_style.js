const params = new URLSearchParams(document.location.search)

const id = params.get('id')

const user_id = params.get('user_id')

const $section = document.querySelector('section')




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
                style_name.innerHTML = `<a href='http://localhost:3000/show_style.html?id=${style.id}'>${style.name}</a>`
                $section.append(style_name)
            })
        })
}