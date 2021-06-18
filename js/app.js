document.addEventListener('DOMContentLoaded', () => {

    const newPlayerAdd = document.querySelector('#new-player-form');
    newPlayerAdd.addEventListener('submit', handlePlayerAdd);

    const deleteAll = document.querySelector('#delete-all')
    deleteAll.addEventListener('click', handleDeleteAll)
})

const handlePlayerAdd = function (event) {
    event.preventDefault();
    
    const listItem = createPlayerItem(event.target)
    const playerList = document.querySelector('#player-list');
    playerList.appendChild(listItem);

    document.querySelector('#new-player-form').reset();
}


const createPlayerItem = function(form) {

    const listItem = document.createElement('li');

    const nameInput = document.createElement('h3');
    nameInput.textContent = form.name.value;
    listItem.appendChild(nameInput);

    const positionSelect = document.createElement('h5');
    positionSelect.textContent = `Position: ${form.position.value}`;
    listItem.appendChild(positionSelect);

    const teamInput = document.createElement('h5');
    teamInput.textContent = `Played for : ${form.teams.value}`;
    listItem.appendChild(teamInput);

    const appearancesInput = document.createElement('h5');
    appearancesInput.textContent = `Total Appearances: ${form.appearances.value}`
    listItem.appendChild(appearancesInput);

    const goalsInput = document.createElement('h5');
    goalsInput.textContent = `Premier League Goals: ${form.goals.value}`;
    listItem.appendChild(goalsInput);

    const trophiesInput = document.createElement('h5');
    trophiesInput.textContent = `Total Trophies: ${form.trophies.value}`;
    listItem.appendChild(trophiesInput);

    return listItem;
}


const handleDeleteAll = function () {
    const playerList = document.querySelector('#player-list')
    playerList.innerHTML = ""
}