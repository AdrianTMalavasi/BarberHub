export class Telefone {
    private _numero: number;

    constructor(numero: number) {
        this._numero = numero; 
    }


    get numero(): number {
        return this._numero;
    }

    set numero(numero: number) {
        if (numero && numero.toString().length >= 8 && numero.toString().length <= 15) {
            this._numero = numero;
        } else {
            throw new Error("Número de telefone inválido! Deve ter entre 8 e 15 dígitos.");
        }
    }

    toString(): string {
        return `Telefone: ${this._numero}`;
    }
}