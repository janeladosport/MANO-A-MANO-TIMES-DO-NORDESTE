
let teamImg = document.getElementById("timesImg")
console.log(teamImg)
let images = teamImg.getElementsByTagName("img")
for (let img of images){
    img.addEventListener("click", (e) => {
        timeClicado(img.getAttribute('data-'))
    })
}

function timeClicado(team){
    let firstTeam = document.getElementById("firstTeam")
    if (firstTeam){
        if (firstTeam.getAttribute('data-') == team){ return} else{
            let secondTeam = document.getElementById("secondTeam")
            if (secondTeam){
                console.log("TEM SECOND TEAM", secondTeam)
                firstTeam.removeAttribute("id")
                secondTeam.removeAttribute("id")
                let teamImg = document.getElementById("timesImg")
                let images = teamImg.getElementsByTagName("img")
                for (let img of images){
                    if (img.getAttribute('data-') == team){img.id = "firstTeam"}
                    }
            } else{
                console.log("NÃO TEM SECOND TEAM")
                let teamImg = document.getElementById("timesImg")
                let images = teamImg.getElementsByTagName("img")
                for (let img of images){
                    if (img.getAttribute('data-') == team){img.id = "secondTeam"}
                    }
                selectSkip(firstTeam.getAttribute('data-'), team)
                console.log("selected", firstTeam.getAttribute('data-'), team)
            }
    } 
} else{
        let teamImg = document.getElementById("timesImg")
        let images = teamImg.getElementsByTagName("img")
        for (let img of images){
            if (img.getAttribute('data-') == team){img.id = "firstTeam"}
    }}
}