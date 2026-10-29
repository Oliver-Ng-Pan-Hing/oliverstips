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
const note = document.getElementById("note")
const alert = document.getElementById("alert")

// DYNAMIC INPUT
// let billWithoutTip = document.getElementById("bill-without-tip").value
// let tipPercentage = document.getElementById("tip-percentage").value / 100
// let numberOfPeople = document.getElementById("number-of-people").value

let billWithoutTip = document.getElementById("bill-without-tip")
let tipPercentage = document.getElementById("tip-percentage")
let numberOfPeople = document.getElementById("number-of-people")

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

// ACTION1
calculator.addEventListener("click", (doTheThing))

    function doTheThing(){
    firstClick = true
    
    let billWithoutTip = Number(document.getElementById("bill-without-tip").value)
    let tipPercentage = Number(document.getElementById("tip-percentage").value / 100)
    let numberOfPeople = Number(document.getElementById("number-of-people").value)

    let billWithoutTipInput = document.getElementById("bill-without-tip")
    let tipPercentageInput = document.getElementById("tip-percentage")
    let numberOfPeopleInput = document.getElementById("number-of-people")

    if(billWithoutTipInput.value === "" || tipPercentageInput.value === "" || numberOfPeopleInput.value === ""){
        console.log("hi")
        note.textContent = "";
        alert.textContent = "Please fill in all the fields 😟"
        return
    }

    // if(numberOfPeople === ""){
    //     perPersonHTML === ""

    // }   

    // CALLING
    tipAmount = calculateTip(billWithoutTip, tipPercentage)
    billIncludingTip = calculateTotalAmountWithTip(billWithoutTip, tipPercentage)
    totalPerPerson = calculatePerPerson(billIncludingTip, numberOfPeople)

    tipHTML.textContent = "R " +  (Math.floor(tipAmount * 100) / 100).toFixed(2)
    totalWithTipHTML.textContent = "R " +  (Math.floor(billIncludingTip * 100) / 100).toFixed(2)
    perPersonHTML.textContent = "R " + (Math.floor(totalPerPerson * 100) / 100).toFixed(2)  
    
    if(billWithoutTip.value !== "" && tipPercentage.value !== "" && numberOfPeople.value !== ""){
        note.textContent = `
        Your bill is ready!
        `
    }
}

// ACTION2
const reset = document.getElementById("reset");

reset.addEventListener("click", function(){
    billWithoutTip.value = "";
    tipPercentage.value = "";
    numberOfPeople.value = "";
    tipHTML.textContent = "";
    totalWithTipHTML.textContent = "";
    perPersonHTML.textContent = "";
    note.textContent = ""
    alert.textContent = ""
    firstClick = false
})

// ACTION3 - LIVE CALCULATOR
let firstClick = false
console.log(firstClick)


billWithoutTip.addEventListener("input", () =>{
    if(firstClick && billWithoutTip.value !== "" && tipPercentage.value !== "" && numberOfPeople.value !== ""){
        doTheThing()
        alert.textContent = ""
        }else{
            tipHTML.textContent = "";
            totalWithTipHTML.textContent = "";
            perPersonHTML.textContent = "";
        }

     if(billWithoutTip.value === ""){
        tipHTML.textContent = "";
        totalWithTipHTML.textContent = "";
        perPersonHTML.textContent = "";
        note.textContent = "";
    }
})

tipPercentage.addEventListener("input", () =>{
    if(firstClick && billWithoutTip.value !== "" && tipPercentage.value !== "" && numberOfPeople.value !== ""){
        doTheThing()
        alert.textContent = ""
        }

     if(tipPercentage.value === ""){
        tipHTML.textContent = "";
        totalWithTipHTML.textContent = "";
        perPersonHTML.textContent = "";
        note.textContent = "";
    }
})

numberOfPeople.addEventListener("input", () =>{
    if(firstClick && billWithoutTip.value !== "" && tipPercentage.value !== "" && numberOfPeople.value !== ""){
        doTheThing()
        alert.textContent = ""
        }
    
        
    if(numberOfPeople.value === ""){
        tipHTML.textContent = "";
        totalWithTipHTML.textContent = "";
        perPersonHTML.textContent = "";
        note.textContent = "";
    }
})

// ACTION4
billWithoutTip.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        if(billWithoutTip.value !== "" && tipPercentage.value !== "" && numberOfPeople.value !== ""){
            doTheThing()
            alert.textContent = ""
        }else{
           alert.textContent = `
           Please fill in all the fields 😟
           `
        }
    }

}) 

tipPercentage.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        if(billWithoutTip.value !== "" && tipPercentage.value !== "" && numberOfPeople.value !== ""){
            doTheThing()
            alert.textContent = ""
        }else{
           alert.textContent = `
           Please fill in all the fields 😟
           `
        }
    }

}) 

numberOfPeople.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        if(billWithoutTip.value !== "" && tipPercentage.value !== "" && numberOfPeople.value !== ""){
            doTheThing()
            alert.textContent = ""
        }else{
           alert.textContent = `
           Please fill in all the fields 😟
           `
        }
    }

}) 


// tipPercentage 
// numberOfPeople 

