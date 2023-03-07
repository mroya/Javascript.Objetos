const cliente = {
    nome: "André",
    idade: 32,
    cpf: "1122233345",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente.nome} e esta pessoa tem ${cliente.idade} anos.`);

console.log(`Os três primeiros dígitos do CPF são ${cliente.cpf.substring(0, 3)}`)
