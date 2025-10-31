let api = "http://localhost:3000/message"

fetch(api)
.then(response => response.json())
.then(data => {
    document.querySelector('h1').textContent = data.message;
    console.log(data.message)
})
.catch(error =>{
    console.error(error);
})