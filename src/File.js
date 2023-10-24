class File {
  static diskSpace = 1000
  static spaceUsed = 0

  static remainingSpace() {
    return File.diskSpace - File.spaceUsed
  }

  constructor(name, extension, size) {
    if (size > File.remainingSpace()) throw new Error('Insufficient memory.')

    this.name = name
    this.extension = extension
    this.size = size
  }
}

class Text extends File {
  constructor(name, extension, size) {
    if (extension !== 'txt') throw new Error('Wrong extension.')

    super(name, extension, size)
  }
}

class Image extends File {
  constructor(name, extension, size) {
    if (!['jpg', 'png'].includes(extension)) throw new Error('Wrong extension.')

    super(name, extension, size)
  }
}

module.exports = { Text, Image }
