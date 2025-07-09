let isAuth = sessionStorage.getItem("auth");

if (isAuth != "true") {
    window.location = "./index.html"
}