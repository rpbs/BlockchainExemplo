pragma solidity ^0.5.1;

contract EmprestimoPessoal {
    
    struct Pessoa {
        string Nome;
        uint Idade;
    }
    
    struct Emprestimo {
        uint valor;
        bool baixado;
    }
    
    address public manager;
    
    mapping(uint => Pessoa) public clientes;
    mapping(uint => Emprestimo) public emprestimos;
    
    uint constant private IDADE = 18;
    
    constructor() public {
        manager = msg.sender;
    }
    
    function CadastrarClientes(string memory nome, uint idade, uint cpf) public managerOnly {
        require(idade >= IDADE, 'idade inválida');
        Pessoa memory p = Pessoa({
           Nome: nome,
           Idade: idade
        });
        clientes[cpf] = p;
    }
    
    function CriarContrato(uint cpf, uint valor) public {
        if (cpf == 0 || valor == 0){
            revert();
        }
        Emprestimo memory e;
        e.valor = valor;
        e.baixado = false;
        emprestimos[cpf] = e;
    }
    
    function VerContrato(uint cpf) view public returns(string memory nome, uint valor){
        Emprestimo storage e = emprestimos[cpf];
        Pessoa storage p = clientes[cpf];
        return (p.Nome, e.valor);
    }
    
    function BaixarContrato(uint cpf) public managerOnly{
        require(!emprestimos[cpf].baixado, 'este contrato está baixado');
        emprestimos[cpf].baixado = true;
    }
    
    modifier managerOnly(){
        require(msg.sender == manager);
        _;
    }
    
}
