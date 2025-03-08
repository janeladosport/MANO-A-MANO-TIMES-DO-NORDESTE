function mudarEsquema(){
    const camp = document.getElementById("camp")
    const campo = document.getElementById("campo")
    const esquema = document.createElement("div")
    camp.insertBefore(esquema, campo)
    esquema.setAttribute("id", "esquema")
}