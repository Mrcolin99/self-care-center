//VARIABLE SECTION
var showButton = document.querySelector('.main-button')
var mantraText = document.querySelector('.mantra-text')
var textSelection = document.querySelectorAll('input[name="selector"]')

var mantraButton = document.getElementById('mantra')
var affirmationButton = document.getElementById('affirmation')

var saveButton = document.querySelector('.save-button')
var savedQuote = document.querySelector('.saved-text')
var showSavedButton = document.querySelector('.unhide-saved')
var savedBox = document.querySelector('.saved')

var textSelected
//ARRAY SECTION
var mantras = [
  'I deserve all that is good ',
  'I accept who I am in my entirety ',
  'My body and my mind are uniquely beautiful '
]

 var affirmations = [
   'I am reaching a stress-free state of mind ',
   'You look beautiful today! ',
   'I am allowed to take time to care for myself ',
   'I will always try my best ',
   'Being calm is a top priority in my life ',
   'I am growing in a direction that makes me thrive ',
   'I can fail mulitple times, but I will keep trying ',
   'Take a deep breathe and relax, you got this! '
 ]

 var saved = []

//EVENT LISTENER
showButton.addEventListener('click', newText)
mantraButton.addEventListener('click', setTypeMantra)
affirmationButton.addEventListener('click', setTypeAffirmation)
saveButton.addEventListener('click', saveQuote)
showSavedButton.addEventListener('click', showSavedBox)
showSavedButton.addEventListener('click', buttonChange)

//FUNCTIONS
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function setTypeMantra() {
  textSelected = 1
}

function setTypeAffirmation() {
  textSelected = 0
}


function newText() {
  if (textSelected === 1) {
    mantraText.innerText = mantras[getRandomIndex(mantras)]
  } else if (textSelected === 0){mantraText.innerText = affirmations[getRandomIndex(affirmations)]}
  event.preventDefault()
}


function saveQuote() {
  saved.push(mantraText.innerText)
  savedQuote.innerText = `Favorited Quotes: ${saved}`
  event.preventDefault()
}

function showSavedBox() {
  if (savedBox.className === 'saved-shown') {
    savedBox.className = 'saved'
  } else {savedBox.className = 'saved-shown'}
}

function buttonChange() {
  if (showSavedButton.innerText === 'Show Favorites') {
    showSavedButton.innerText = 'Hide Favorites'
  } else {showSavedButton.innerText = 'Show Favorites'}
}
