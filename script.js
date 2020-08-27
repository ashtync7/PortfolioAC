axios.get("https://ironrest.herokuapp.com/mia-aug2020-webdevs").then(res => {
   console.log(res)
})

axios.get("https://www.potterapi.com/v1/characters?key=$2a$10$AkgCGEKIUDVqXQ.rjYiMgu3kTgjm4QVSxU9zz188JXV7VPWSZaiOW&house=Gryffindor").then(res => {
console.log(res)
console.log(res.data)
console.log(res.data[0])
console.log(res.data[0].name)
document.querySelector("#harry").innerText=res.data[0].name
})
