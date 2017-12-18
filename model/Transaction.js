'use strict'

module.exports = class Transaction{
    constructor(fromWallet, toWallet, amount, timestamp){
        this.fromWallet = fromWallet;
        this.toWallet = toWallet;
        this.amount = amount;
        this.timestamp = timestamp;
    }
}