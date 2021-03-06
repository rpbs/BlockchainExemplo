pragma solidity ^0.4.24;

contract Cliente {
    
    address public manager;
    
    struct DadosCliente {
        string nome;
        uint idade;
        string documento;
    }
    
    DadosCliente[] public clientes;
    
    constructor() public{
        manager = msg.sender;
    }
    
    function CadastrarCliente(string memory Nome, uint Idade, string memory Documento) public {
        DadosCliente memory dados = DadosCliente({
           nome: Nome,
           idade: Idade,
           documento: Documento
        });
        
        clientes.push(dados);
    }   
    
    function RemoverClient(uint idx) public {
        delete clientes[idx];
    }
}