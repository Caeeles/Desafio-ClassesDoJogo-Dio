class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    attack() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "a mão";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroes = [
    new Hero("Juvenaldo", 128, "Mago"),
    new Hero("Jandira", 15, "Ninja"),
    new Hero("Nadir", 8, "Monge")
];

for (let hero of heroes) {
    hero.attack();
}