const crypto = require('crypto')

module.exports = new class AES {

    constructor() {
        this.algorithm = 'aes-256-cbc'
        this.vector = crypto.randomBytes(16)
        this.key = crypto.randomBytes(32)
        this.cipher = {
            encrypt: crypto.createCipheriv(this.algorithm, this.key, this.vector),
            decrypt: crypto.createDecipheriv(this.algorithm, this.key, this.vector)
        }
    }

    setAlgorithm(algorithm) {
        this.algorithm = algorithm.toLowerCase().trim()
    }

    setVector(buffer) {
        if (!Buffer.isBuffer(buffer)) throw `setVector: ${buffer} is not of type Buffer`
        this.vector = buffer
    }

    setKey(buffer) {
        if (!Buffer.isBuffer(buffer)) throw `setKey: ${buffer} is not of type Buffer`
        this.key = buffer
    }

    encrypt(plaintext) {
        let data = this.cipher.encrypt.update(plaintext, 'utf-8', 'hex')
        data += this.cipher.encrypt.final('hex')

        return data
    }

    decrypt(ciphertext) {
        let data = this.cipher.decrypt.update(ciphertext, 'hex', 'utf-8')
        data += this.cipher.decrypt.final('utf-8')

        return data
    }

}