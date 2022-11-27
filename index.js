let misreservas = []

const vuelos = [
    { id: 1, pais: "Madrid", precio: 250000, disponibilidad: true, img: "https://a.cdn-hotels.com/gdcs/production133/d1207/7ad2d7f0-68ce-11e8-8a0f-0242ac11000c.jpg" },
    { id: 2, pais: "Los Angeles", disponibilidad: true, precio: 350000, img:"https://cdn2.civitatis.com/estados-unidos/los-angeles/galeria/hollywood-boulevard-2.jpg" },
    { id: 3, pais: "New York", disponibilidad: true, precio: 310000, img:"https://a.cdn-hotels.com/gdcs/production196/d1429/5c2581f0-c31d-11e8-87bb-0242ac11000d.jpg?impolicy=fcrop&w=800&h=533&q=medium" },
    { id: 4, pais: "Tailandia", disponibilidad: true, precio: 410000, img:"https://www.cronista.com/files/image/297/297593/5ffe0c82c6d33.jpg" },
    { id: 5, pais: "Australia", disponibilidad: false, precio: 470000, img:"https://cdn.travelsafe-abroad.com/wp-content/uploads/thumb-1920-716104.jpg" },
    { id: 6, pais: "Tokio", disponibilidad: true, precio: 510000, img:"https://www.gotokyo.org/es/plan/tokyo-outline/images/main.jpg" },
]


let html = ""
vuelos.forEach(el => {
    const classCard = el.disponibilidad ? "card" : "greyCard"
    html +=  `
        <div class=${classCard}>
            <img src=${el.img} class="img" />
            <ul class="list">
                <h3> Tu siguiente destino: </h3>
                <li>
                    ${el.pais}
                </li>
                <li>
                    $${el.precio}
                </li>
            </ul>
            <button id=${el.id} class="button" onclick=reserva(${el.id})>Reservar</button>
           
        </div>
   
    `
})

document.getElementById("fly").innerHTML = html

function reserva(idAReserva){

    let destinosDisponibles = vuelos.find(el => el.id === idAReserva)
    localStorage.getItem("lista") ? misreservas = JSON.parse(localStorage.getItem("lista")) : misreservas = []

    if(destinosDisponibles.disponibilidad){

        let buscar = misreservas.some(el => el.id === idAReserva)

        if(!buscar){
            let destino = vuelos.find(el =>el.id == idAReserva)
        misreservas.push(destino)
        localStorage.setItem("lista", JSON.stringify(misreservas))

        alert("Reservaste el vuelo a " + destino.pais)
        }
        else{
            alert("Estás seleccionando un vuelo ya reservado.")

        }
    }
    else{
        alert("No hay vuelos disponibles.")
    }
}











