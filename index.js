class Cliente{
    nome;
    cpf;
    rg;
}

class ContaCorrente{
    agencia;
    // #saldo = 0
    _saldo = 0;

    sacar(valor){
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    depostiar(valor){
        if (valor > 0) {
            this._saldo += valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.rg = 123456789;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

contaCorrenteRicardo.depostiar(1000);
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(valorSacado);
console.log(contaCorrenteRicardo);