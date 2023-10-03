console.log('Tente adivinhar um número de 1 à 100');

var number;

function generateNumber() {

number = +Math.floor(Math.random() * 100);

console.log(`O resultado deve ser ${number}`);

return number;
}


function guessNumber() {

const userValue = document.querySelector('#userValue').value;
const result = document.querySelector('#result');

if(+userValue === number) {
    result.innerHTML = `O número é ${number}.Você acertou, parabéns!`;
} else if(+userValue > number) {
    result.innerHTML = `Errou. O número está acima!`;
} else if(!userValue) {
    alert('Insira um número!');
} else if(!number) {
    alert('Gere o número aleatório primeiro!');
}
else {
    result.innerHTML = `Errou. O número está abaixo!`;
}
}
