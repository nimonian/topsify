class File {
  static allFiles = []
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
    File.allFiles.push(this)
  }
}

module.exports = File
