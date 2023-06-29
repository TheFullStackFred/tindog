class Dog {
  constructor(data) {
    Object.assign(this, data)
  }

  setMatchStatus(bool) {
    this.hasBeenSwiped = true
    this.hasBeenLiked = bool
  }

  getBadgeHtml() {
    if (this.hasBeenSwiped) {
      if (this.hasBeenLiked) {
        return `<img class="main__badge" src="images/badge-like.png"/>`
      } else {
        return `<img class="main__badge" src="images/badge-nope.png"/>`
      }
    } else {
      return ''
    }
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this

    return `
      <div class="main__content" style="background: url('${avatar}')center/cover">
      ${this.getBadgeHtml()}
      <div class="main__info">
      <h2 class="main__info-title">${name}, ${age}</h2>
      <p class="main__info-bio">${bio}</p>
      </div>
      </div>`
  }
}

export default Dog
