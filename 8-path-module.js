const path = require('path')

console.log(path.sep)


const filepath = path.join('/content/','test/','test.txt')
console.log(filepath)


const base = path.basename(filepath, '.txt')
const extension = path.extname(filepath)
console.log(base)
console.log(extension)

// const absolute = path.resolve(__dirname, 'content', 'test', 'test.txt');
// console.log(absolute);

