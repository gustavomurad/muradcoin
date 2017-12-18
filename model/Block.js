'use strict'

module.exports = class Block{
    constructor(index, timestamp, data, previousHash, nonce = 0, hash = '') {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.nonce = nonce;
        this.hash = hash;
    }
}