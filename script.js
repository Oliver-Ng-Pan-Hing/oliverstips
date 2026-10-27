// Input 
// **   Bill without tip
// **   Tip Percentage
// **   Number of People

// Process
// 
// ** Receive the Bill without tip
// ** Receive the the Number of People
// ** Choose the Tip Percentage
// ** Calculate the Total with tip INCLUDED 
// ** The Total with tip 
// ** Calculate how much per person

// Output
// 
// ** The Tip Amount
// ** The Total Bill with tip INCLUDED
// ** The bill per person


// GETTING ELEMENTS
const calculator = document.getElementById("calculator")
const tipHTML = document.getElementById("tip-amount")
const totalWithTipHTML = document.getElementById("total-with-tip")
const perPersonHTML = document.getElementById("per-person")

// DYNAMIC INPUT
// let billWithoutTip = document.getElementById("bill-without-tip").value
// let tipPercentage = document.getElementById("tip-percentage").value / 100
// let numberOfPeople = document.getElementById("number-of-people").value

// DYNAMIC OUTPUT
let tipAmount;
let billIncludingTip;
let totalPerPerson;

function calculateTip(billWithoutTip_, tipPercentage_){
    tipAmount = billWithoutTip_ * tipPercentage_
    return tipAmount
}

function calculateTotalAmountWithTip(billWithoutTip_, tipPercentage_){
    billIncludingTip = billWithoutTip_ + (billWithoutTip_ * tipPercentage_)
    return billIncludingTip
}

function calculatePerPerson(billIncludingTip_, numPeople_){
    totalPerPerson = billIncludingTip_ / numPeople_
    return totalPerPerson
}

// ACTION
calculator.addEventListener("click", (doTheThing))

function doTheThing(){
    let billWithoutTip = Number(document.getElementById("bill-without-tip").value)
    let tipPercentage = Number(document.getElementById("tip-percentage").value / 100)
    let numberOfPeople = Number(document.getElementById("number-of-people").value)

    // CALLING
    tipAmount = calculateTip(billWithoutTip, tipPercentage)
    billIncludingTip = calculateTotalAmountWithTip(billWithoutTip, tipPercentage)
    totalPerPerson = calculatePerPerson(billIncludingTip, numberOfPeople)

    tipHTML.textContent = "R " + tipAmount
    totalWithTipHTML.textContent = "R " + billIncludingTip
    perPersonHTML.textContent = "R " + totalPerPerson  

    // if(billWithoutTip === NaN && tipPercentage === NaN && numberOfPeople === NaN){
    //     alert("Only numbers allowed in the inputs please 😘")
    // }

    // console.log("The tip amount is: " + tipAmount )
}

// console.log("The tip amount is: " + tipAmount )
// console.log("The Total amount including tip is: " + billIncludingTip)
// console.log("Each person pays: " + totalPerPerson)
 
