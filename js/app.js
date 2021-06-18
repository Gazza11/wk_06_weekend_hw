document.addEventListener('DOMContentLoaded', () => {
const newPlayerAdd = document.querySelector('#new-player-form');
newPlayerAdd.addEventListener('submit', handlePlayerAdd);

})

const handlePlayerAdd = function (event) {
    event.preventDefault();
    console.log(event);
}