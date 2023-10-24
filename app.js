const { Song, Anthem } = require('./src/Song')
const { Text, Image } = require('./src/File')

const s1 = new Song('Hello', 123)
const s2 = new Song('Goodbye', 321)

console.log(Song.catalogue)
console.log(Anthem.catalogue)
