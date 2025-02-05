const crypto = require("crypto");

// Block class
class Block {
  constructor(index, timestamp, transactions, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  // Hash function using SHA-256
  calculateHash() {
    return crypto
      .createHash("sha256")
      .update(
        this.index +
          this.timestamp +
          JSON.stringify(this.transactions) +
          this.previousHash +
          this.nonce
      )
      .digest("hex");
  }

  // Simple Proof-of-Work 
  // Search for hash until the require hash is met , and nonce keeps on increasing.
  mineBlock(difficulty) {
    while (this.hash.substring(0, difficulty) !== "0".repeat(difficulty)) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log(`Block mined: ${this.hash}`);
  }
}

// Blockchain class
class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 2; // Adjust for mining complexity
  }

  
  // Genesis Block
  createGenesisBlock() {
    return new Block(0, Date.now(), "Genesis Block", "0");
  }

  // Get the latest block
  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  // Add a new block
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.mineBlock(this.difficulty); // Perform Proof-of-Work
    this.chain.push(newBlock);
  }

  // Validate the blockchain integrity
  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

function getFormattedDate() {
    const date = new Date();
    return date.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // 24-hour format
    });
  }

  
  
// Testing the blockchain
// You can use Date.now() for the time in seconds , here I just have used the formatted date to show month , year , etc.

let myBlockchain = new Blockchain();
console.log("Mining Block 1...");
myBlockchain.addBlock(new Block(1, getFormattedDate(), { amount: 100 }));

console.log("Mining Block 2...");
myBlockchain.addBlock(new Block(2, getFormattedDate(), { amount: 50 }));

console.log("Blockchain:", JSON.stringify(myBlockchain, null, 2));
console.log("Is blockchain valid?", myBlockchain.isChainValid());



// Tampering Example
myBlockchain.chain[1].transactions = { amount: 5000 };
console.log("Is blockchain valid after tampering?", myBlockchain.isChainValid());
