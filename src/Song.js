const File = require('./File')

class Song extends File {
  constructor(name, extension, size, duration) {
    super(name, extension, size)
    this.duration = duration
  }

  displayDuration() {
    let seconds = this.duration
    let minutes = 0

    while (seconds >= 60) {
      seconds -= 60
      minutes++
    }

    seconds = (seconds < 10 ? '0' : '') + seconds
    minutes = (minutes < 10 ? '0' : '') + minutes

    return minutes + ':' + seconds
  }
}

module.exports = Song
