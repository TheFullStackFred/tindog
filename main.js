import dogsData from './data.js'
import Dog from './Dog.js'

let currentDog = new Dog(dogsData.shift())

const acceptBtn = document.getElementById('accept-btn')
const rejectBtn = document.getElementById('reject-btn')

acceptBtn.addEventListener('click', accept)
rejectBtn.addEventListener('click', reject)

render()

function render() {
  if (currentDog) {
    acceptBtn.style.display = 'inline'
    rejectBtn.style.display = 'inline'
    document.getElementById('main').innerHTML = currentDog.getDogHtml()
  } else {
    document.getElementById(
      'main'
    ).innerHTML = `<h1 class="main__empty-message">No more dogs in your area</h1>`
  }
}

function getNewDog() {
  render()
  acceptBtn.style.display = 'none'
  rejectBtn.style.display = 'none'

  setTimeout(() => {
    if (dogsData.length > 0) {
      currentDog = new Dog(dogsData.shift())
    } else {
      currentDog = null
    }
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
