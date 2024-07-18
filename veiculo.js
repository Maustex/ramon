class veiculo {
    constructor(nome, velocidade = 0, modelo, cor, passageiros = 0){
        this.nome = nome;
        this.velocidade = velocidade;
        this.modelo = modelo;
        this.cor = cor;
        this.passageiros = passageiros;
    }
    toString = function(){
        return `o veículo ${this.nome} está a ${this.velocidade} km/h`
    }
    acelerar(){
        return this.velocidade += 10;
    }
    freiar(){
        return this.velocidade > 0 ? this.velocidade -= 5 : 'você está parado'
    }
}

const bicicleta = new veiculo("saveiro", 100, "nova", "azul", 3)
console.log(bicicleta.acelerar())
console.log(bicicleta.toString())

module.exports = veiculo;