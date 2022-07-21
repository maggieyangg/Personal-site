let countIndicatorHome = document.getElementById("count-indicator-home")
let countIndicatorGuest = document.getElementById("count-indicator-guest")

let countHome = 0
let countGuest = 0

function addHome(amount){
    countHome += amount
    countIndicatorHome.textContent = countHome 
}


function addGuest(amount){
    countGuest += amount
    countIndicatorGuest.textContent = countGuest 
}




