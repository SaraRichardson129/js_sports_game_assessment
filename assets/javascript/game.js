let shootButton1 = document.querySelector("#teamone-shoot-button")
let shootButton2 = document.querySelector("#teamtwo-shoot-button")
let resetButton = document.querySelector("#reset-button")


// Team One 

let count1 = 0;
const goalspan1 = document.querySelector("#teamone-numgoals")
const shotsTaken1 = document.querySelector("#teamone-numshots")

shootButton1.addEventListener("click", function () {

    let newCounterValue = Number(shotsTaken1.innerHTML) + 1;
    shotsTaken1.innerHTML = newCounterValue;
    let random = Math.floor(Math.random() * 2);
    if (random == 1) {
        goalspan1.innerHTML = newCounterValue * 2;
    }
    console.log(random);
})


// Team Two 

let count2 = 0;
const goalspan2 = document.querySelector("#teamtwo-numgoals")
const shotsTaken2 = document.querySelector("#teamtwo-numshots")

shootButton2.addEventListener("click", function () {

    let newCounterValue = Number(shotsTaken2.innerHTML) + 1;
    shotsTaken2.innerHTML = newCounterValue;
    let random = Math.floor(Math.random() * 2);
    if (random == 1) {
        goalspan2.innerHTML = newCounterValue * 2;
    }
    console.log(random);
})


// Reset 

let count3 = 0;
const resetspan = document.querySelector("#num-resets")

resetButton.addEventListener("click", function () {

    let newCounterValue = Number(resetspan.innerHTML) + 1;
    resetspan.innerHTML = newCounterValue;

    shotsTaken1.innerHTML = newCounterValue = 0;
    goalspan1.innerHTML = newCounterValue = 0;
    shotsTaken2.innerHTML = newCounterValue = 0;
    goalspan2.innerHTML = newCounterValue = 0;

})