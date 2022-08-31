(function(){
    const titulo = document.getElementById("titulo")
    titulo.style.color = "red"
    titulo.addEventListener("click",()=>alert("Hiciste click en el título"))

    const all_img = document.querySelectorAll("img")
    all_img.forEach(e=>{
        if(e.src.includes("full")) {
            e.style.width = "100%"
        }
    })
})()

