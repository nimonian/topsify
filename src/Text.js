const File = require('./File')

class Text extends File {
  constructor(name, extension, size) {
    if (extension !== 'txt') throw new Error('Wrong extension.')

    super(name, extension, size)
  }
}

module.exports = Text
