class Dog {
  constructor(data) {
    Object.assign(this, data)
  }

  setMatchStatus(bool) {
    this.hasBeenSwiped = bool
    this.hasBeenSwiped = true
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this

    return `
    <div class="main__content" style="background: url('${avatar}')center/cover">
    <div class="main__info">
    <h2 class="main__info-title">${name}, ${age}</h2>
    <p class="main__info-bio">${bio}</p>
    </div>
    </div>`
  }
}

export default Dog
