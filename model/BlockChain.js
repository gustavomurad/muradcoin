'use strict';

const Block = require('./Block');
const Transaction = require('./Transaction');
const Miner = require('./Miner');

const GENESIS_HASH = '0000000000000000000000000000000000000000000000000000000000000000';
const DIFFICULTY = 3;

module.exports = class BlockChain{
    constructor(){
        this.chain = [this.createGenisisBlock()];
    }

    createGenisisBlock(){
        let genesisBlock = new Block(0, new Date(), new Transaction('', '', 0, new Date()), GENESIS_HASH);
        genesisBlock = Miner.startMining(genesisBlock, DIFFICULTY);
        return genesisBlock;
    }

    getLastHash() {
        let myBlock = this.chain[this.chain.length - 1];
        if (myBlock instanceof Block) {
            return myBlock.hash;
        }
    }

    add(block){
        block.previousHash = this.getLastHash();
        block = Miner.startMining(block, DIFFICULTY);
        this.chain.push(block);
    }

    isValid() {
        for (let i = 1; i < this.chain.length; i++){
            const current = this.chain[i];
            const previous = this.chain[i - 1];

            if ((current.hash !== Miner.calculateHash(current)) || 
               ((current.previousHash !== previous.hash))) {
                return false;
            }
        }
        return true;
    }
} 