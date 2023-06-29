import dogsData from './data.js'
import Dog from './Dog.js'

let currentDog = new Dog(dogsData.shift())

document.getElementById('accept-btn').addEventListener('click', accept)
document.getElementById('reject-btn').addEventListener('click', reject)

render()

function render() {
  if (dogsData.length > 0) {
    document.getElementById('main').innerHTML = currentDog.getDogHtml()
  } else {
    document.getElementById(
      'main'
    ).innerHTML = `<h1 class="main__empty-message">No more dogs in your area</h1>`
  }
}

function getNewDog() {
  currentDog = new Dog(dogsData.shift())

  setTimeout(() => {
    render()
  }, 2000)
}

function accept() {
  currentDog.setMatchStatus(true)
  getNewDog()
}

function reject() {
  currentDog.setMatchStatus(false)
  getNewDog()
}
