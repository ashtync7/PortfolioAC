// axios.get("https://ironrest.herokuapp.com/mia-aug2020-webdevs").then(res => {
//    console.log(res)
// })

// let btn=document.querySelector(".button2")
// btn.addEventListener("click", function(){
//     axios.get("https://www.potterapi.com/v1/characters?key=$2a$10$AkgCGEKIUDVqXQ.rjYiMgu3kTgjm4QVSxU9zz188JXV7VPWSZaiOW")
//         .then(res => {
//             let bigObThing = res.data[Math.floor(Math.random() * res.data.length)]
//                 console.log(bigObThing)
//             let bigHtmlThing = `
//                 <div>${bigObThing.name}</div>
//                 <div>${bigObThing.school ? bigObThing.school: 'school unknown'}</div>
//                 <div>${bigObThing.house ? bigObThing.house: 'no house'}</div>
//                 <div>${bigObThing.patronus ? bigObThing.patronus: 'unkown patronus'}</div>
//                 <div>${bigObThing.species}</div>
//                 <div>${bigObThing.bloodStatus ? bigObThing.bloodStatus: 'blood status unknown'}</div>
//                 <div>${bigObThing.role ? bigObThing.role: 'role unknown'}</div>
//                 <div>${bigObThing.alias ? bigObThing.alias: 'no known alias'}</div>
//                 <div>${bigObThing.wand ? bigObThing.wand: 'wand unknown'}</div>
//             `
//             document.querySelector("#HP").innerHTML=bigHtmlThing

//         }) 
// })