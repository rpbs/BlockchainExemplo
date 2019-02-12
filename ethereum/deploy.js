// 0D41B4C409236E6EA23C99206AE03F2750F8D41812E54BDEA513DC44BE210BEE
const HDWallet = require('truffle-hdwallet-provider');
const web3 = require('./web3');

const cliente = require('./build/Cliente.json');

// Tendo acesso a uma account...
const provider = new HDWallet(
    'six stairs become melody steel thunder truck march grunt roof toast steel',
    'https://rinkeby.infura.io/v3/d17636ca76e74fe8ac497e01bb3a0ad7'
);

//const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/d17636ca76e74fe8ac497e01bb3a0ad7"));


//const web3 = new Web3(provider);
//web3.eth.getAccounts().then((accounts)=>{console.log});

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();

    console.log('tentando deployar a partir da conta', accounts[0]);

    /*const result = await new web3.eth.Contract(JSON.parse(cliente.interface))
      .deploy({ data: '0x' + cliente.bytecode })
      .send({ from: '0x97d0503083e5F7520892a03510b0D76c5D4DCb4C', gas: '1000000' });
      console.log('Contrato  no endereço', result.options.address);*/
      
}

deploy();
