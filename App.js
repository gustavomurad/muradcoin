'use strict';

const Block = require('./model/Block');
const Blockchain = require('./model/BlockChain');
const Transaction = require('./model/Transaction');

let MuradCoin = new Blockchain();
let transactions = [new Transaction('Yeti', 'Kurt', 150, new Date()),
                    new Transaction('Nina', 'Morty', 100, new Date()),
                    new Transaction('Homer', 'Rick', 50, new Date()),
                    new Transaction('Rick', 'Morty', 10, new Date()),
                    new Transaction('Jonny', 'Mia', 150, new Date()),
                    new Transaction('Marta', 'Mia', 5, new Date())]
MuradCoin.add(new Block(1, new Date(), transactions));

transactions = [new Transaction('John', 'Nina', 200, new Date()),
                new Transaction('Yeti', 'Jack', 70, new Date())]
MuradCoin.add(new Block(2, new Date(), transactions));

transactions = [new Transaction('Ron', 'Jack', 10, new Date())]
MuradCoin.add(new Block(3, new Date(), transactions));

//Print our blockchain

console.log('Print our BlockChain...');
console.log(MuradCoin);

console.log('Testing if our blockchain is valid or not ...');
console.log('This BlockChain Is valid? ' + MuradCoin.isValid());

console.log('Lets try to hack our blockchain...');
MuradCoin.chain[3].data[0].amount = 1000;

console.log('Testing again if our blockchain is valid or not ...');
console.log('This BlockChain Is valid? ' + MuradCoin.isValid());