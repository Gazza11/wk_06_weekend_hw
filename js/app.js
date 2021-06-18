document.addEventListener('DOMContentLoaded', () => {

    const newPlayerAdd = document.querySelector('#new-player-form');
    newPlayerAdd.addEventListener('submit', handlePlayerAdd);

    const deleteAll = document.querySelector('#delete-all')
    deleteAll.addEventListener('click', handleDeleteAll)
})

const handlePlayerAdd = function (event) {
    event.preventDefault();
    
    const playerList = document.querySelector('#player-list');
    const newListItem = document.createElement('li');
    playerList.appendChild(newListItem);

    const nameInput = document.createElement('h3');
    nameInput.textContent = event.target.name.value;
    playerList.appendChild(nameInput);

    const positionSelect = document.createElement('h5');
    positionSelect.textContent = `Position: ${event.target.position.value}`;
    playerList.appendChild(positionSelect);

    const teamInput = document.createElement('h5');
    teamInput.textContent = `Played for : ${event.target.teams.value}`;
    playerList.appendChild(teamInput);

    const appearancesInput = document.createElement('h5');
    appearancesInput.textContent = `Total Appearances: ${event.target.appearances.value}`
    playerList.appendChild(appearancesInput);

    const goalsInput = document.createElement('h5');
    goalsInput.textContent = `Premier League Goals: ${event.target.goals.value}`;
    playerList.appendChild(goalsInput);

    const trophiesInput = document.createElement('h5');
    trophiesInput.textContent = `Total Trophies: ${event.target.trophies.value}`;
    playerList.appendChild(trophiesInput);

    document.querySelector('#new-player-form').reset();

}

const handleDeleteAll = function () {
    const playerList = document.querySelector('#player-list')
    playerList.innerHTML = ""
}