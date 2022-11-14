function createTitleGroup(name) {
  return `
    <h3>GRUPO ${name}</h3>
    <div>
      <a href="#logo"> 
        <img src="./assets/icon-goback.svg" alt="Volte ao inicio">
      </a>
    </div>
  `
}

document.querySelector("#cardA-title").innerHTML = createTitleGroup("A")
document.querySelector("#cardB-title").innerHTML = createTitleGroup("B")
document.querySelector("#cardC-title").innerHTML = createTitleGroup("C")
document.querySelector("#cardD-title").innerHTML = createTitleGroup("D")
document.querySelector("#cardE-title").innerHTML = createTitleGroup("E")
document.querySelector("#cardF-title").innerHTML = createTitleGroup("F")
document.querySelector("#cardG-title").innerHTML = createTitleGroup("G")
document.querySelector("#cardH-title").innerHTML = createTitleGroup("H")

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
  hourC2,
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

const groupAData = {
  name: "A",
  player1: "qatar",
  player2: "ecuador",
  player3: "senegal",
  player4: "netherlands",
}

document.querySelector("#cardA").innerHTML =
  createCard("20/11", "domingo", createdGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createdGame("senegal", "13:00", "netherlands")
  ) +
  createCard(
    "25/11",
    "sexta",
    createdGame("qatar", "10:00", "senegal") +
      createdGame("netherlands", "13:00", "ecuador")
  ) +
  createCard(
    "29/11",
    "terça",
    createdGame("netherlands", "12:00", "qatar") +
      createdGame("ecuador", "12:00", "senegal")
  )

const groupBData = {
  name: "B",
  player1: "england",
  player2: "iran",
  player3: "united states",
  player4: "wales",
  dateA: "21/11",
  dateB: "25/11",
  dateC: "29/11",
  dayA: "segunda",
  dayB: "sexta",
  dayC: "terça",
  hourA1: "10:00",
  hourA2: "16:00",
  hourB1: "07:00",
  hourB2: "16:00",
  hourC1: "16:00",
  hourC2: "16:00",
}

const groupCData = {
  name: "C",
  player1: "argentina",
  player2: "saudi arabia",
  player3: "mexico",
  player4: "poland",
  dateA: "22/11",
  dateB: "26/11",
  dateC: "30/11",
  dayA: "terça",
  dayB: "sábado",
  dayC: "quarta",
  hourA1: "07:00",
  hourA2: "13:00",
  hourB1: "10:00",
  hourB2: "16:00",
  hourC1: "16:00",
  hourC2: "16:00",
}

const groupDData = {
  name: "D",
  player1: "france",
  player2: "australia",
  player3: "denmark",
  player4: "tunisia",
  dateA: "22/11",
  dateB: "26/11",
  dateC: "30/11",
  dayA: "terça",
  dayB: "sábado",
  dayC: "quarta",
  hourA1: "10:00",
  hourA2: "16:00",
  hourB1: "07:00",
  hourB2: "13:00",
  hourC1: "12:00",
  hourC2: "12:00",
}

const groupEData = {
  name: "E",
  player1: "spain",
  player2: "costa rica",
  player3: "germany",
  player4: "japan",
  dateA: "23/11",
  dateB: "27/11",
  dateC: "01/12",
  dayA: "quarta",
  dayB: "domingo",
  dayC: "quinta",
  hourA1: "10:00",
  hourA2: "13:00",
  hourB1: "07:00",
  hourB2: "16:00",
  hourC1: "16:00",
  hourC2: "16:00",
}

const groupFData = {
  name: "F",
  player1: "belgium",
  player2: "canada",
  player3: "morocco",
  player4: "croatia",
  dateA: "23/11",
  dateB: "27/11",
  dateC: "01/12",
  dayA: "quarta",
  dayB: "domingo",
  dayC: "quinta",
  hourA1: "07:00",
  hourA2: "16:00",
  hourB1: "10:00",
  hourB2: "13:00",
  hourC1: "12:00",
  hourC2: "12:00",
}

const groupGData = {
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

const groupHData = {
  name: "H",
  player1: "portugal",
  player2: "ghana",
  player3: "uruguay",
  player4: "south korea",
  dateA: "24/11",
  dateB: "28/11",
  dateC: "02/12",
  dayA: "quinta",
  dayB: "segunda",
  dayC: "sexta",
  hourA1: "10:00",
  hourA2: "13:00",
  hourB1: "10:00",
  hourB2: "16:00",
  hourC1: "12:00",
  hourC2: "12:00",
}

// CreateGroup(groupAData)
CreateGroup(groupBData)
CreateGroup(groupCData)
CreateGroup(groupDData)
CreateGroup(groupEData)
CreateGroup(groupFData)
CreateGroup(groupGData)
CreateGroup(groupHData)
