let shootButton1 = document.querySelector("#teamone-shoot-button")
let shotsTaken1 = document.querySelector("#teamone-numshots")
let shootButton2 = document.querySelector("#teamtwo-shoot-button")
let shotsTaken2 = document.querySelector("#teamtwo-numshots")
let resetButton = document.querySelector("#reset-button")




// Team One 

let count1 = 0;
const goalspan1 = document.querySelector("#teamone-numgoals")
const goalspan3 = document.querySelector("#teamone-numshots")


shootButton1.addEventListener("click", function () {

    let newCounterValue = Number(goalspan1.innerHTML) + 1;
    goalspan1.innerHTML = newCounterValue;

    let random = Math.floor(Math.random() * 2);
    if (random == 1) {
        let newCounterValue = Number(goalspan1.innerHTML) + 1
    }


    console.log(random);

    let newCounterValue2 = Number(goalspan3.innerHTML) + 1;
    goalspan3.innerHTML = newCounterValue;


})


// Team Two 

let count2 = 0;
const goalspan2 = document.querySelector("#teamtwo-numgoals")
const goalspan4 = document.querySelector("#teamtwo-numshots")
shootButton2.addEventListener("click", function () {

    let newCounterValue = Number(goalspan2.innerHTML) + 1;
    goalspan2.innerHTML = newCounterValue;
    let newCounterValue2 = Number(goalspan4.innerHTML) + 1;
    goalspan4.innerHTML = newCounterValue;


    let random = Math.floor(Math.random() * 2);
    console.log(random);
})


// Reset 

let count3 = 0;
const resetspan = document.querySelector("#num-resets")

resetButton.addEventListener("click", function () {

    let newCounterValue = Number(resetspan.innerHTML) + 1;
    resetspan.innerHTML = newCounterValue;

})