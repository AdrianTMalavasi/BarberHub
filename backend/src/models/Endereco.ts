export class Endereco {
    private _rua: string;
    private _numero: number;
    private _bairro: string;
    private _cep: string;

    constructor(rua: string, numero: number, bairro: string, cep: string) {
        this._rua = rua; // Usa o setter para validar
        this._numero = numero;
        this._bairro = bairro;
        this._cep = cep;
    }

    // ✅ Getter e Setter para Rua
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

    get cep(): string {
        return this._cep;
    }

    set cep(cep: string) {
        const regexCep = /^[0-9]{5}-?[0-9]{3}$/; // Valida formatos como 12345-678 ou 12345678
        if (regexCep.test(cep)) {
            this._cep = cep;
        } else {
            throw new Error("CEP inválido! O formato correto é 12345-678.");
        }
    }

    toString(): string {
        return `Endereço: ${this._rua}, ${this._numero}, ${this._bairro}, CEP: ${this._cep}`;
    }
}
