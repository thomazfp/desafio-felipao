class Personagem {
    constructor(nome, idade, tipoClasse) {
        this.nome = nome;
        this.idade = idade;
        this.tipoClasse = tipoClasse;
    }

    ataque() {
        let ataque;

        switch (this.tipoClasse) {
            case "mago":
                ataque = "usou magia"
                break;
            case "guerreiro":
                ataque = "usou a espada"
                break;
            case "monge":
                ataque = "usou artes marciais"
                break;
            case "ninja":
                ataque = "usou shuriken"
                break;
        }

        return ataque
    }

    atacar() {
        const ataqueRealizado = this.ataque()
        console.log(`o ${this.tipoClasse} atacou usando ${ataqueRealizado}`)
    }
}

let heroi = new Personagem("Rakan", 5, "monge")
heroi.atacar()