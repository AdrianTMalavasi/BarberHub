export class Pagamento {
    private _metodo: string;

    constructor(metodo: string) {
        this._metodo = metodo;
    }

    get metodo(): string {
        return this._metodo;
    }

    set metodo(metodo : string) {
        const metodoValidos = ['PIX', 'Dinheiro', 'Cartão'];
        if (metodoValidos.includes(metodo)) {
            this._metodo = metodo;
        } else {
            throw new Error("Forma de pagamento recusada, aceitamos PIX, Dinheiro ou Cartão ");
        }
    }

    toString(): string {
        return `Metodo de Pagamento: ${this._metodo}`;
    }
}

