user = {
    email : "j@j",
    password : "1234"
}

function auth() {
    const email = document.querySelector("#emailInput").value;
    const password = document.querySelector("#passwordInput").value;

    if (email && password) {
        if (email == user.email && password == user.password) {
            sessionStorage.setItem("auth", "true")
            window.location = "./baseDatos.html"
        } else {
            alert("Credenciales no permitidas")
        }
    } else {
        alert("Rellena los campos")
    }
}

const logBtn = document.querySelector(".btn").addEventListener("click", auth)


