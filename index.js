console.log("lets go")
async function fetchData() {
    try {
        const responce = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await responce.json();
        console.log(data.message);
        const image = document.querySelector("div");
        image.innerHTML = `<img src="${data.message}"/>`
    }
    catch (error){
        console.error("error")
    }
    
}
fetchData();