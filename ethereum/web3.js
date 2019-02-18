const Web3 = require('web3');

let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
  //
  web3 = new Web3(window.web3.currentProvider);
} else {
  //const web3 = new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/d17636ca76e74fe8ac497e01bb3a0ad7"));
  web3 = new Web3("https://rinkeby.infura.io/v3/d17636ca76e74fe8ac497e01bb3a0ad7");
}

//var hd = new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/xxxxyyyzzz");    
console.log(web3);

module.exports = web3;
