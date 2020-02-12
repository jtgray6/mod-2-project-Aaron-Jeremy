const params = new URLSearchParams(document.location.search)

const id = params.get('id')

const user_id = params.get('user')

fetch(`http://localhost:4000/reviews/${id}`)
    .then(response => response.json())
    .then(review => {
        const $form = document.createElement('form')
        $form.method = "POST"
        $form.action = `http://localhost:4000/reviews/${id}`
        $form.innerHTML = `
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
