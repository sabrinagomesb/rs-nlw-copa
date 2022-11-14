function createdGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s"> 
       <h2>
        ${date}
        <span>
          ${day}
        </span>
      </h2>
      <div>
        <ul>
          ${games}
        </ul>
      </div>
    </div>
  `
}

function CreateGroup({
  name,
  player1,
  player2,
  player3,
  player4,
  dateA,
  dateB,
  dateC,
  dayA,
  dayB,
  dayC,
  hourA1,
  hourA2,
  hourB1,
  hourB2,
  hourC1,
  hourC2
}) {
  document.querySelector(`#card${name}`).innerHTML =
    createCard(
      dateA,
      dayA,
      createdGame(player1, hourA1, player2) +
        createdGame(player3, hourA2, player4)
    ) +
    createCard(
      dateB,
      dayB,
      createdGame(player2, hourB1, player4) +
        createdGame(player3, hourB2, player1)
    ) +
    createCard(
      dateC,
      dayC,
      createdGame(player2, hourC1, player3) +
        createdGame(player4, hourC2, player1)
    )
}

const groupGdata = {
  name: "G",
  player1: "switzerland",
  player2: "cameroon",
  player3: "brazil",
  player4: "serbia",
  dateA: "24/11",
  dateB: "28/11",
  dateC: "02/12",
  dayA: "quinta",
  dayB: "segunda",
  dayC: "sexta",
  hourA1: "07:00",
  hourA2: "16:00",
  hourB1: "07:00",
  hourB2: "13:00",
  hourC1: "16:00",
  hourC2: "16:00",
}



CreateGroup(groupGdata)
