/**
 * Script to process the submitted form data of the form in file
 * pricing.html 
 */
document.getElementById("num-guests").onblur = numGuests_blur;
document.getElementById("num-nights").onblur = numNights_blur;
document.getElementById("price-button").onclick = calculate;
const priceValue = document.getElementById("price-value");
const taxesValue = document.getElementById("taxes-value");
const totalValue = document.getElementById("total-value");
const priceResult = document.getElementById("price-result");
const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function numGuests_blur() {
    console.log("numGuests_blur")
    let numGuests = document.getElementById('num-guests').value;
    const val = parseInt(numGuests);
    let guestsError = document.getElementById('guests-error');

    if (isNaN(val) || val<1) {
        guestsError.classList.remove('display-none');
        return false;
    } else {
        guestsError.classList.add('display-none');
        console.log("val:", val);
        return true;
    }
}
function numNights_blur() {
    let numGuests = document.getElementById('num-nights').value;
    const val = parseInt(numGuests);
    let guestsError = document.getElementById('nights-error');

    if (isNaN(val) || val<1) {
        console.log("invalid");
        guestsError.classList.remove('display-none');
        return false;
    } else {
        guestsError.classList.add('display-none');
        console.log("val:", val);
        return true;
    }
}
function calculate()
{
    if (!numGuests_blur())
    {
        return;
    }
    if (!numNights_blur())
    {
        return;
    }  
    const guestsNum = document.getElementById("num-guests").value;
    const numNights = document.getElementById("num-nights").value;
    let costs = (parseInt(guestsNum)) * (parseInt(numNights) * 30);
    const breakfast = document.getElementById("breakfast").checked;
    const dinner = document.getElementById("dinner").checked;

    if (breakfast)
    {
        costs += (10*guestsNum*numNights);    
    }
    if (dinner)
    {
        costs += (20*guestsNum*numNights);    
    }
    const tax = costs * .21;


    priceValue.innerHTML = USDollar.format(costs);
    taxesValue.innerHTML = USDollar.format(tax);
    totalValue.innerHTML = USDollar.format(costs + tax);
    priceResult.classList.remove('display-none');

}