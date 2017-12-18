'use strict';

const SHA256 = require('crypto-js/sha256');
const Block = require('./Block');

module.exports = class Miner{
    static startMining(block, difficult){
        let proofOfWork = '0';
        while(proofOfWork.substring(0, difficult) !== "0".repeat(difficult)) {
            block.nonce++;
            proofOfWork = this.calculateHash(block);
            console.log("Mining, new hash found: " + proofOfWork);
            console.log("Nonce: " + block.nonce);
        }
        block.hash = proofOfWork;
        console.log("Proof of Work: " + proofOfWork);
        return block;
    }

    static calculateHash(block){
        return SHA256(block.index + 
                      block.previousHash +
                      block.timestamp +
                      JSON.stringify(block.data) + 
                      block.nonce).toString();
     }
 
}