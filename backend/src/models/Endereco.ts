import { CEP } from "./Cep";

export class Endereco {
    private _rua: string;
    private _numero: number;
    private _bairro: string;
    private _cep: CEP;

    constructor(rua: string, numero: number, bairro: string, cep: CEP) {
        this._rua = rua;
        this._numero = numero;
        this._bairro = bairro;
        this._cep = cep;
    }


    get rua(): string {
        return this._rua;
    }

    set rua(rua: string) {
        if (rua.trim() !== "") {
            this._rua = rua;
        } else {
            throw new Error("A rua não pode estar vazia.");
        }
    }

    get numero(): number {
        return this._numero;
    }

    set numero(numero: number) {
        if (numero > 0) {
            this._numero = numero;
        } else {
            throw new Error("O número deve ser maior que zero.");
        }
    }

    get bairro(): string {
        return this._bairro;
    }

    set bairro(bairro: string) {
        if (bairro.trim() !== "") {
            this._bairro = bairro;
        } else {
            throw new Error("O bairro não pode estar vazio.");
        }
    }

    get cep(): CEP {
        return this._cep;
    }

    set cep(cep: CEP) {
        if (cep instanceof CEP) {
            this._cep = cep;
        } else {
            throw new Error("CEP inválido! O formato correto é 12345-678.");
        }
    }

    toString(): string {
        return `Endereço: ${this._rua}, ${this._numero}, ${this._bairro}, CEP: ${this._cep}`;
    }
}
