const Web3 = require('web3');
const json = require('./build/Cliente.json');

//console.log(json.interface);


const web3 = new Web3("https://rinkeby.infura.io/v3/d17636ca76e74fe8ac497e01bb3a0ad7");

const address = "0x97d0503083e5F7520892a03510b0D76c5D4DCb4C";

const contratoEndereco = "0xbd8cd2f9609765521632baad6fd44668a358411e";

const contrato = web3.eth.Contract(JSON.parse(json.interface), contratoEndereco, { 
  from: address 
});

// contrato.methods.clientes(0).call().then((f) =>{
//   console.log(f);  
// });

contrato.methods.RemoverClient(1).send({  from : address, gas: '1000000'});

// contrato.methods.clientes(1).call().then((m) =>{
//   console.log(m);
// });
