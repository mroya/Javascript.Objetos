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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes('enderecos')){
    console.error("Erro. É nescessário ter um endereço cadastrado.")
}
