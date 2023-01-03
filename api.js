const escutar = document.getElementById("inicio");

escutar.addEventListener('click', () => {

    const timeStamp = "1672760199";
    const apiKey = "cd8d3db883e73270af723f9dc1e565e0";
    
    const md5 = "f1adbb0eaf85437c87c90462132f855f";
    
    fetch (`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey${apiKey}&hash=${md5}`
    ).then((response) => {
        return response.json();
    }).then((jsonParsed)=>{
        console.log(jsonParsed)
    })
    
    })

// vingadores()
//    console.log('ola😎')
// })

// async function vingadores(){
// const timeStamp = "1672760199";
// const apiKey = "cd8d3db883e73270af723f9dc1e565e0";
// const md5 = "f1adbb0eaf85437c87c90462132f855f";

// fetch (`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey${apiKey}&hash=${md5}&limit=6`
// ).then((response) => {
//     return response.json();
// }).then((jsonParsed)=>{
//     console.log(jsonParsed)
// })

// }
