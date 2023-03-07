const cliente = {
    nome: 'João',
    idade: 24,
    email: 'joao@firma.com',
    telefone: ['115555550', '1144433322'],
};

cliente.enderecos = [
    {
    rua: 'Rua Joseph Climber',
    numero: 1337,
    apartamento: true,
    complemento: 'ap 934',
    },
];

cliente.enderecos.push({
    rua: 'Rua Joseph Ladder',
    numero: 404,
    apartamento: false,
    complemento: 'Casa',
})

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);