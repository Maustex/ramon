const Veiculo = require('./veiculoo')

class Moto extends Veiculo{
    constructor(cilindrada, rodas, velocidade, modelo,cor, passageiros){
        super(velocidade, modelo, cor, passageiros)
        this.cilindrada = cilindrada;
        this.rodas = rodas;
    }
}

const ninja = new Moto(500, 2, 150, 'ninja', 'azul', 1)
ninja.acelerar()