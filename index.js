/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const p1 = document.getElementById("p1")
const button = document.getElementById("btn")
let lenght = document.getElementById("lenght")
const volume = document.getElementById("volume")
const kilogram = document.getElementById("kilogram")


button.addEventListener("click", function(){
    kilogramfuc()
    lengthfuc()
    volumefuc()
})

function lengthfuc(){
    let inputVal = p1.value
    let pFeet = inputVal * 3.281
    let pMeter = inputVal * 0.305
    let final = `${inputVal} meters = ${pFeet.toFixed(3)} feet | ${inputVal} feet = ${pMeter.toFixed(3)} meters`
   lenght.textContent = final
}
function volumefuc(){
    let inputVal = p1.value
    let pGallon = inputVal * 0.264
    let pLiter = inputVal * 3.785
    let final1 = `${inputVal} liters = ${pGallon.toFixed(3)} gallons | ${inputVal} gallons = ${pLiter.toFixed(3)} liters`
   volume.textContent = final1
}
function kilogramfuc(){
    let inputVal = p1.value
    let pPound = inputVal * 2.205
    let pKilo = inputVal * 0.454
    let final2 = `${inputVal} kilos = ${pPound.toFixed(3)} pounds | ${inputVal} pounds = ${pKilo.toFixed(3)} kilos`
    kilogram.textContent = final2
}


