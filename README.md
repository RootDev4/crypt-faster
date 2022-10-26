# crypt-faster
Cryptography utility for Node.js to en-/decrypt faster.

WORK IN PROGRESS

## Installation
`npm i crypt-faster --save`

## Usage
```javascript
const AES = require('crypt-faster')

const plaintext = 'Hello World'
const ciphertext = AES.encrypt(plaintext)

console.log(ciphertext, AES.decrypt(ciphertext))
// > bb2ad7b3c2d36c0ae4135598faa2dcb0 Hello World
```

## License
[MIT](../blob/master/LICENSE)