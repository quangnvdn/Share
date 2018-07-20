const Web3 = require('web3');

const fs = require('fs');
const path = require('path');
const varToken = path.resolve(__dirname, 'contracts', 'Voting.sol' );
const addressAccount = '0x3082d4a5a00296ef51506c4f1fe795ce287f58fe'; // user

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
let code = fs.readFileSync(varToken, 'UTF-8').toString();
const solc = require('solc');
let compiledCode = solc.compile(code);
let abiDefinition = JSON.parse(compiledCode.contracts[':Voting'].interface);
let VotingContract = web3.eth.contract(abiDefinition);
var byteCode = compiledCode.contracts[':Voting'].bytecode;

    const deployedContract = VotingContract.new(['Rama', 'Nick', 'Jose'], { data: '0x' + byteCode, from: addressAccount, gas: 4700000 }
    , (err, res) => {
        if (err) {
            console.log("Error deploying contract: " + err);
            return;
        }
        console.log(`transaction hash: ${res.transactionHash}`);
        if (res.address) {
            console.log(`Contract address: ${res.address}\n`);
        }
    }
    );


// let contractInstance = VotingContract.at('0x52f8c271730b2c8e6b49b93c954c46f8f500b329');

// contractInstance.totalVotesFor.call('Rama');
// console.log("here is "+contractInstance.totalVotesFor.call('Rama'))

// contractInstance.voteForCandidate('Rama', {from: addressAccount});
// console.log('2 ',contractInstance.voteForCandidate('Rama', {from: addressAccount}))

// contractInstance.voteForCandidate('Rama', {from: addressAccount});
// console.log('3 ',contractInstance.voteForCandidate('Rama', {from: addressAccount}))

// contractInstance.voteForCandidate('Rama', {from: addressAccount});
// console.log('4 ',contractInstance.voteForCandidate('Rama', {from: addressAccount}));

// contractInstance.totalVotesFor.call('Rama').toLocaleString();
// console.log('5 ',contractInstance.totalVotesFor.call('Rama').toLocaleString());

// (function wait () {
//     setTimeout(wait, 1000);
// })();

