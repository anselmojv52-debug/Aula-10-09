// Escolher a opcao
var escolha = parseInt(prompt("1 adição 2 - subtracao 3 multi- 4 - div 5 quadrado 6 retÂngulo 7 triÂngulo"))

if(escolha ==1 ){

var  x = parseFloat(prompt("Digite o primeiro valor:"));
var  y = parseFloat(prompt("Digite o seguinte valor:"));

var adicao = x + y;

console.log("O valor da soma e: ", adicao);
alert("O valor da soma e: "+ adicao);
}else if(escolha == 2){

var  x = parseFloat(prompt("Digite o primeiro valor:"));
var  y = parseFloat(prompt("Digite o seguinte valor:"));

var subtracao = x + y;

console.log("O valor da subtracao e: ", subtracao);
alert("O valor da subtracao e: "+ subtracao);

}
else if(escolha == 3){
    var  x = parseFloat(prompt("Digite o primeiro valor:"));
var  y = parseFloat(prompt("Digite o seguinte valor:"));

var multiplicacao = x * y;

console.log("O valor da soma e: ", multiplicacao);
alert("O valor da soma e: "* multiplicacao);
}
else if(escolha == 4){
    var  x = parseFloat(prompt("Digite o primeiro valor:"));
var  y = parseFloat(prompt("Digite o seguinte valor:"));

var divisao = x / y;

console.log("O valor da soma e: "+ divisao);
alert("O valor da soma e: "+ divisao);
}
else if(escolha == 5){
    var  x = parseFloat(prompt("Digite o primeiro valor:"));
var  y = parseFloat(prompt("Digite o seguinte valor:"));

var Quadrado = x * y;

console.log("O valor da soma e: "+ Quadrado);
alert("O valor da soma e: "+ Quadrado);
}
else if(escolha == 6){
    var  x = parseFloat(prompt("Digite o primeiro valor:"));
var  y = parseFloat(prompt("Digite o seguinte valor:"));

var Retangulo = x * y;

console.log("O valor da soma e: "+ Retangulo);
alert("O valor da soma e: "+ Retangulo);
}
else if(escolha == 7){
    var  x = parseFloat(prompt("Digite o primeiro valor:"));
var  y = parseFloat(prompt("Digite o seguinte valor:"));

var Retangulo = (x * y)/2;

console.log("O valor da soma e: "+ Triangulo);
alert("O valor da soma e: "+ Triangulo);
}