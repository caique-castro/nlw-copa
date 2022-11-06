function createGame(player1, hour, player2){
    return `
    <li>
        <img src="./src/images/icon=${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./src/images/icon=${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

let delay = -0.3;
function createCard(date, day, games){
    delay = delay + 0.3;
    return `
<div class="card" style="animation-delay: ${delay}s">
    <h2> ${date} <span>${day}</span></h2>
    <ul>
        ${games}
    </ul>
</div>
`
}

document.querySelector('#app').innerHTML = `
<header>
    <img src="./src/images/logo.svg" alt="Logo da NLW">
</header>
<main id="cards">
    ${createCard("23/11", "quarta", createGame("japan", "10:00", "germany"))}
    ${createCard("24/11", "quinta", createGame("south korea", "10:00", "uruguay") + createGame("brazil", "16:00", "serbia"))}
    ${createCard("27/11", "doming", createGame("japan", "07:00", "costa rica"))}
    ${createCard("28/11", "segunda", createGame("south korea", "10:00", "ghana") + createGame("brazil", "13:00", "switzerland"))}
    ${createCard("01/12", "quinta", createGame("japan", "16:00", "spain"))}
    ${createCard("02/12", "sexta", createGame("south korea", "12:00", "portugal") + createGame("brazil", "16:00", "cameroon"))}
</main>
`
