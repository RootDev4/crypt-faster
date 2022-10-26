const AES = require('../index.js')

const plaintext = 'Hello World'
const ciphertext = AES.encrypt(plaintext)

console.log(ciphertext, AES.decrypt(ciphertext))