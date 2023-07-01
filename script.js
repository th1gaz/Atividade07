let idade, text;

const ano_atual=2023;
const nome = prompt('digite seu nome: ')
let ano_pss = prompt('digite o ano que voce nasceu: ')
idade = ano_atual-ano_pss

text = `Olá, seu nome é ${nome} e você tem ${idade} anos :)`
alert(text)