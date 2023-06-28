import dogsData from './data.js'
import Dog from './Dog.js'

function getNewDog() {
  const nextDogData = [...dogsData]
  console.log(nextDogData)
  return nextDogData ? new Dog(nextDogData.shift()) : {}
}

function render() {
  document.getElementById('main').innerHTML = dog.getDogHtml()
}

let dog = getNewDog()
render()
