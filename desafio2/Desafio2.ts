
// DESAFIO 2:
// Como podemos melhorar o esse código usando TS? 
// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };
// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }

enum Profissao{
    Atriz,
    Padeiro
}

interface Infos{
    Nome: string,
    Idade: number,
    Profissao: Profissao

}


let pessoa1: Infos = {
    Nome: "maria",
    Idade: 29,
    Profissao: Profissao.Atriz
}

let pessoa2: Infos = {
    Nome: "roberto",
    Idade: 19,
    Profissao: Profissao.Padeiro 
}

let pessoa3: Infos = {
    Nome: "laura",
    Idade: 32,
    Profissao: Profissao.Atriz
}

let pessoa4: Infos = {
    Nome: "carlos",
    Idade: 19,
    Profissao: Profissao.Padeiro 
}


