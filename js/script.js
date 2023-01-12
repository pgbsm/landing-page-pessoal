/*
OBJETIVO 01 - Ao passar o mouse por cima de um dos blocos, aterar seu tamanho e de todos os itens dentro dele.

- passo 1 - pegar o elemento HTML dos blocos
- passo 2 - identificar o mouse do usuario passando no elemento HTML especifico
- passo 3 - alterar os tamanhos dos itens deste elemento


OBJETIVO 02 - Escurecer os outros blocos que não estão com o mouse por cima.

- passo 1 - pegar os elementos HTML dos blocos
- passo 3 - alterar os tamanhos dos itens deste elemento

*/

document.querySelector("link-bloco").onmouseover = function() {blocoSobreposto()};

function blocoSobreposto() {
    console.log("check")
}