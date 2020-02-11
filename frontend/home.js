const $select = document.querySelector('select')
const $section = document.querySelector('section')

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

fetch(`http://localhost:4000/reviews`)
    .then(response => response.json())
    .then(displayReviews)

function displayReviews(reviews) {
    let $reviews = reviews.map(displayReview)
    $reviews.forEach(review => $section.append(review))
}

function displayReview(review) {
    let $card = document.createElement('div')
    
    fetch(`http://localhost:4000/styles/${review.beer.style_id}`)
        .then(response => response.json())
        .then(style => {
            $card.innerHTML = `
                <h2>${review.beer.name}</h2>
                <h3>${style.name}</h3>
                <h3>${review.beer.brewery}</h3>
                <h2>${review.rating}</h2>
                <p>${review.description}</p>
            `
        })

    return $card
}
