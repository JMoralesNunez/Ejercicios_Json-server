const URL_API = "http://localhost:2000/products/"

async function index() {
    try {
        const res = await fetch(URL_API)
        const items = await res.json()
        console.log(items);
    } catch (error) {
        console.log(error);
    }
}

const indexBtn = document.querySelector(".index").addEventListener("click", index)

async function show() {
    try {
        const res = await fetch(URL_API + "356")
        const items = await res.json()
        console.log(items);
    } catch (error) {
        
    }
}

const showBtn = document.querySelector(".show").addEventListener("click", show)


async function store() {
    const name = document.getElementById("inputName");
    const price = document.getElementById("inputPrice");
    const quantity = document.getElementById("inputQuantity");
    try {
        const resGet = await fetch(URL_API);
        const data = await resGet.json();
        console.log(typeof(data));
        console.log(data);
        const exist = data.some(item => item.name === name.value);
        if(exist){
            alert("Lo siento mi gato este nombre ya esta");
        }else{
            if (name.value && price.value && quantity.value) {
                const res = await fetch(URL_API, {
            "method": "POST",
            "headers" : {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                "name": name.value,
                "price": price.value,
                "quantity": quantity.value
            })
            })
            } else {
                alert("Rellena los campos")
            }    
        };
        
    } catch (error) {
        
    };
};

const SaveBtn = document.querySelector(".store").addEventListener("click", store)

async function update() {
    const editId = document.getElementById("editId");
    const editName = document.getElementById("editName");
    const editPrice = document.getElementById("editPrice");
    const editQuantity = document.getElementById("editQuantity");
    try {
        const res = await fetch(URL_API+editId.value, {
            "method": "PUT",
            "headers" : {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                "name": editName.value,
                "price": editPrice.value,
                "quantity": editQuantity.value
            })
        })
    } catch (error) {
        
    }
}

const updateBtn = document.querySelector(".update").addEventListener("click", update)

async function destroy() {
    const deleteId = document.getElementById("deleteId");
    try {
        const res = await fetch(URL_API+deleteId.value, {
            "method": "DELETE"
        })
    } catch (error) {
        
    }
}

const deleteBtn = document.querySelector(".destroy").addEventListener("click", destroy)