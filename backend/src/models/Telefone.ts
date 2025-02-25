export class Telefone {
    private _numero: string;

    constructor(numero: string) {
        this._numero = numero;
    }


    get numero(): string {
        return this._numero;
    }

    set numero(numero: string) {
        const numeroLimpo = numero.trim();

        if (/^\d{8,15}$/.test(numeroLimpo)) {
            this._numero = numeroLimpo;
        } else {
            throw new Error("Número de telefone inválido! Deve conter entre 8 e 15 dígitos numéricos.");
        }
    }
    
    toString(): string {
        return `Telefone: ${this._numero}`;
    }
}