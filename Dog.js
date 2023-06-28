class Dog {
  constructor(data) {
    Object.assign(this, data)
  }

  getDogHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLikes } = this

    return `
    <div class="main__content" style="background-image: url('${avatar}')">
    <div class="main__info">
    <h2 class="main__info-title">${name}, ${age}</h2>
    <p class="main__info-bio">${bio}</p>
    </div>
    </div>`
  }
}

export default Dog
