/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorlKm;

    constructor(marca, cor, gastoMedioPorlKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorlKm = gastoMedioPorlKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorlKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro('Fiat', 'Preto', 1 / 10);
console.log(palio.calcularGastoDePercurso(70, 5));



/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obeso';
        } else {
            return 'Obesidade Grave';
        }
    }
}

const lika = new Pessoa('lika', 45, 1.51);
console.log(lika.classificarImc());
const renan = new Pessoa('renan', 63, 1.75);
console.log(renan.classificarImc());
const vitor = new Pessoa('vitor', 60, 1.69);
console.log(vitor.classificarImc());
const jose = new Pessoa('jose', 70, 1.75);
console.log(jose.classificarImc());