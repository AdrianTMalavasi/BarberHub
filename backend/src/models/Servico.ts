export class Servico {
    private _nome: string;
    private _descricao: string;
    private _duracao: number;
    private _preco: number;

    constructor(nome: string, descricao: string, duracao: number, preco: number) {
        this._nome = nome;  
        this._descricao = descricao;
        this._duracao = duracao;
        this._preco = preco;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        if (nome.trim().length > 0) {
            this._nome = nome;
        } else {
            throw new Error("O nome do serviço não pode ser vazio.");
        }
    }

    get descricao(): string {
        return this._descricao;
    }

    set descricao(descricao: string) {
        if (descricao.trim().length > 0) {
            this._descricao = descricao;
        } else {
            throw new Error("A descrição do serviço não pode ser vazia.");
        }
    }

    get duracao(): number {
        return this._duracao;
    }

    set duracao(duracao: number) {
        if (duracao > 0) {
            this._duracao = duracao;
        } else {
            throw new Error("A duração do serviço deve ser maior que 0 minutos.");
        }
    }

    get preco(): number {
        return this._preco;
    }

    set preco(preco: number) {
        if (preco >= 0) {
            this._preco = preco;
        } else {
            throw new Error("O preço não pode ser negativo.");
        }
    }

    toString(): string {
        return `Serviço: ${this._nome}, Descrição: ${this._descricao}, Duração: ${this._duracao} min, Preço: R$ ${this._preco.toFixed(2)}`;
    }
}