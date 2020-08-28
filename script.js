axios.get("https://ironrest.herokuapp.com/mia-aug2020-webdevs").then(res => {
   console.log(res)
})

let btn=document.querySelector(".button2")
btn.addEventListener("click", function(){
    axios.get("https://www.potterapi.com/v1/characters?key=$2a$10$AkgCGEKIUDVqXQ.rjYiMgu3kTgjm4QVSxU9zz188JXV7VPWSZaiOW").then(res => {
        document.querySelector("#HP").innerText=res.data[Math.floor(Math.random() * res.data.length)].name
        }) 
})