# basic-blockchain-implementation

# Simple Blockchain in JavaScript

This is a simple blockchain implementation in JavaScript using Node.js and the built-in `crypto` module. The project demonstrates the fundamental concepts of blockchain, including block creation, proof-of-work, and chain validation.

## Features
- Block structure with SHA-256 hashing
- Proof-of-Work (PoW) mechanism for mining
- Genesis block creation
- Adding new blocks to the chain
- Blockchain integrity validation
- Demonstrates tampering detection

## Prerequisites
Ensure you have Node.js installed on your system. You can check by running:
```sh
node -v
```

## Installation
Clone the repository and navigate to the project folder:
```sh
git clone https://github.com/your-repo/blockchain-js.git
cd blockchain-js
```

## Usage
Run the blockchain script using Node.js:
```sh
node blockchain.js
```

## Code Overview
### Block Class
Defines a block with an index, timestamp, transactions, previous hash, nonce, and hash. The `calculateHash` method generates a SHA-256 hash, and `mineBlock` performs proof-of-work.

### Blockchain Class
Manages the blockchain, including:
- Genesis block creation
- Adding new blocks
- Validating the blockchain integrity

### Example Usage
The script initializes a blockchain, mines two blocks, and validates the chain. It also demonstrates blockchain tampering detection.

## Expected Output
```
Mining Block 1...
Block mined: <hash>
Mining Block 2...
Block mined: <hash>
Blockchain: {...}
Is blockchain valid? true
Is blockchain valid after tampering? false
```

## License
This project is licensed under the MIT License.

## Author
Deepesh Singh Rathore

