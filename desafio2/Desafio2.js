"use strict";
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
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    Nome: "maria",
    Idade: 29,
    Profissao: Profissao.Atriz
};
let pessoa2 = {
    Nome: "roberto",
    Idade: 19,
    Profissao: Profissao.Padeiro
};
let pessoa3 = {
    Nome: "laura",
    Idade: 32,
    Profissao: Profissao.Atriz
};
let pessoa4 = {
    Nome: "carlos",
    Idade: 19,
    Profissao: Profissao.Padeiro
};
