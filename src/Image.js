const File = require('./File')

class Image extends File {
  constructor(name, extension, size) {
    if (!['jpg', 'png'].includes(extension)) throw new Error('Wrong extension.')

    super(name, extension, size)
  }
}

module.exports = Image
