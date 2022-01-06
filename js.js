
const button = document.getElementById('button')           //
const clearButton = document.getElementById('clearButton')//
const hideButton = document.getElementById('hideButton') //jostain syystä näitä ei tarvinnu, että nappulat toimi...

const quoteText = document.querySelector('.container p')
//event listeners for buttons
button.addEventListener('click', newQuote)
clearButton.addEventListener('click', removeQuote)
hideButton.addEventListener('click', hideFace)
//async function for getting quotes
async function newQuote() {
    const quoteData = await fetch("https://api.kanye.rest/", {
        headers: {
            'Accept': 'application/json'
        }
    })
    //waits and then changes innerHtml to the new quote
    const quoteObj = await quoteData.json()
    console.log(quoteObj.quote)
    quoteText.innerHTML = quoteObj.quote
}

function removeQuote() {
    quoteText.innerHTML = ''
}
//hides the image
function hideFace() {
    const x = document.getElementById("west")
    if (x.style.display === "none") {
      x.style.display = "block"
    } else {
      x.style.display = "none"
    }
  }

//https://api.kanye.rest/