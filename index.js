class Cliente{
    nome;
    cpf;
    rg;
}

class ContaCorrente{
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

console.log(cliente1);
console.log(cliente2);