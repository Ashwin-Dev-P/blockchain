let hash = require('object-hash')

class BlockChain {
    constructor(props) {
        this.chain = [];

        this.current_transaction = [];
    }

    addNewBlock(prevHash) {
        let block = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.current_transaction,
            hash: null,
            prevHash: prevHash,
        }

        this.hash = hash(block);
        this.chain.push(block);
        this.current_transaction = [];
        return block;
    }

    addNewTransaction(sender, recepient, amount) {
        this.current_transaction.push({ sender, recepient, amount })
    }

    lastBlock() {
        return this.chain.slice(-1)[0];
    }

    isEmpty() {
        return this.chain.length == 0;
    }
}

module.exports = BlockChain;