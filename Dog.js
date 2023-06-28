class Dog {
  constructor(data) {
    console.log('Data in constructor', data)
    Object.assign(this, data)
  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLikes } = this

    return `
    <div                                  class="main__content" style="background-image: url('${avatar}')">
    <h2>${name}, ${age}</h2>
    <p>${bio}</p>
    </div>`
  }
}

export default Dog
