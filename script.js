console.log('Tente adivinhar um número de 1 à 100');

var number;

function generateNumber() {

number = +Math.floor(Math.random() * 100);
const inputYourNumber = document.querySelector('#inputYourNumber');
console.log(`O resultado deve ser ${number}`);
inputYourNumber.innerHTML = `Número gerado, agora insira seu palpite:`

return number;
}


function guessNumber() {
const userValue = document.querySelector('#userValue').value;
const result = document.querySelector('#result');
const fireworks = document.querySelector('#fireworks');

if(+userValue === number) {
    result.innerHTML = `O número é ${number}.Você acertou, parabéns!`;
    fireworks.src = 'img/fireworks.gif' ;
} else if(+userValue > number) {
    result.innerHTML = `Errou. Seu palpite foi muito alto!`;
} else if(!userValue) {
    alert('Insira um número!');
} else if(!number) {
    alert('Gere o número aleatório primeiro!');
}
else {
    result.innerHTML = `Errou. Seu palpite foi muito abaixo!`;
}
}
