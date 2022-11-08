function createdGame(player1Img, player1Name, hour, player2Img, player2Name) {
  return `
    <li>
      <img src="./assets/icon-${player1Img}.svg" alt="Bandeira do ${player1Name}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2Img}.svg" alt="Bandeira da ${player2Name}">
    </li>
  `
}

let delay = -0.3;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s"> 
       <h2>
        ${date}
        <span>
          ${day}
        </span>
      </h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = 
    createCard(
      "24/11",
      "quinta",
      createdGame("switzerland", "Suíça", "07:00", "cameroon", "Camarões") +
      createdGame("brazil", "Brasil", "16:00", "serbia", "Sérvia")) +
    createCard(
      "28/11",
      "segunda",
      createdGame("cameroon", "Camarões", "07:00", "serbia", "Sérvia") +
      createdGame("brazil", "Brasil", "13:00", "switzerland", "Suíça")) +
    createCard(
      "02/12",
      "sexta",
      createdGame("cameroon", "Camarões", "16:00", "brazil", "Brasil") +
      createdGame("serbia", "Sérvia", "16:00", "switzerland", "Suíça"))

