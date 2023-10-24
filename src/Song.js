class Song {
  static catalogue = []

  static addSong(title) {
    Song.catalogue.push(title)
  }

  constructor(title, duration) {
    this.title = title
    this.duration = duration
    Song.addSong(title)
  }

  logDetails() {
    console.log(`The song ${this.title} is ${this.duration} seconds long.`)
  }
}

class Anthem extends Song {
  constructor(title, duration, affiliation) {
    // calls constructor of Song
    super(title, duration)

    // custom logic for Anthem
    this.affiliation = affiliation
  }
}

module.exports = { Song, Anthem }
