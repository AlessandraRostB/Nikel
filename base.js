const nome = "Alessandra Berti";
let nome2 = "";
let pessoaDefault = {
    nome: "Alessandra Rost Berti",
    idade: "17",
    profissao: "Estudante"
}

let nomes = ["Alessandra Berti", "Maria Silva", "Geann Rost"];
let pessoas = [{
    nome: "Alessandra",
    idade: "17",
    profissao: "Estudante"

},

{ nome: "Geann",
    idade: "14",
    profissao: "Estudante"
}

];




console.log("Valor inicial:");
console.log(nome2);

nome2 = "Geann Rost";
console.log("Valor alterado");
console.log(nome2);

function alterarNome (){
    nome2 = "Maria Silva"
    console.log("Valor alterado");
    console.log(nome2);

}

function recebeEalteraNome(novoNome){
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa){
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Profissao:");
    console.log(pessoa.profissao);

}

function adicionarPessoa(){
   pessoas.push(pessoas);


};

function imprimirPessoas(){
    console.log("-----------IMPRIMIR PESSOAS------------");
    pessoas.forEach((item) => {
        //console.log("Nome:")
        //console.log(item.nome);

        //console.log("Idade:");
        //console.log(item.idade);

        //console.log("Profissao:");
        //console.log(item.profissao);
        console.log(item);
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "15",
    trabalho: "Programador"

});

console.log(pessoas);
    




//imprimirPessoa(pessoaDefault);

//  imprimirPessoa({
  //  nome:"Geann Berti",
 //   idade: "14",
  //  profissao: "Estudante"
//});



//recebeEalteraNome("Maria Silva Moraes");

//alterarNome();

