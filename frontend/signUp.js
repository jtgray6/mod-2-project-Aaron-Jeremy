const params = new URLSearchParams(document.location.search)
const failure = params.get('failure')

if (failure === "true") {
    alert("Username must be unique. Passwords must be 6 characters.")
}