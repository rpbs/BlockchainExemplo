const Web3 = require('web3');

const web3 = new Web3("https://rinkeby.infura.io/v3/d17636ca76e74fe8ac497e01bb3a0ad7");

const address = "0x97d0503083e5F7520892a03510b0D76c5D4DCb4C";


web3.eth.getBalance(address, (err, wei) => {
  console.log(web3.utils.fromWei(wei, 'ether'));  
});