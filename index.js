let BlockChain = require('./BlockChain/blockChain')
require('dotenv').config();
let hash = require("object-hash")
let blockChain = new BlockChain();

//TO run the file: node index.js
let PROOF = Number(process.env.PROOF);

let validProof = (proof) => {
    let guessHash = hash(proof);
    console.log("Hashing guess:", guessHash)
    return guessHash == hash(PROOF);
}

let proofOfWork = () => {
    let proof = 0;
    while (true) {
        if (!validProof(proof)) {
            proof++;
        } else {
            break;
        }
    }
    return proof;
}

if (proofOfWork() == PROOF) {
    blockChain.addNewTransaction("tom", 'john', 100);
    let prevHash = blockChain.lastBlock() ? blockChain.lastBlock().hash : null;
    blockChain.addNewBlock(prevHash);
}

console.log("chain:", blockChain.chain)
