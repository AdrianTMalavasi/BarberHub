export class CEP {
    private _CEP : string;
    private _UF : string;
    private _cidade : string;

    constructor (cep : string, uf : string, cidade : string ){
        this._CEP = cep;
        this._UF = uf;
        this._cidade = cidade;

    }
    
    get cep(): string {
        return this._CEP;
    }

    set cep(cep: string) {
        const regexCep = /^[0-9]{5}-?[0-9]{3}$/; 
        if (regexCep.test(cep)) {
            this._CEP = cep;
        } else {
            throw new Error("CEP inválido! O formato correto é 12345-678.");
        }
    }

    get uf(): string {
        return this._UF;
    }

    set uf(uf : string) {
        if (uf.trim().length > 0) {
            this._UF = uf;
        } else {
            throw new Error("UF não pode ser vazio.");
        }
    }

    get cidade(): string {
        return this._cidade;
    }

    set cidade(cidade: string) {
        if (cidade.trim().length > 0) {
            this._cidade = cidade;
        } else {
            throw new Error("A cidade não pode ser vazio.");
        }
    }

}