const params = new URLSearchParams(document.location.search)
const login_error = params.get('login-error')

if (login_error === "true") {
    alert("Login info was incorrect. Please try again.")
}