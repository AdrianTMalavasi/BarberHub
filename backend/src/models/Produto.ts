export class Produto {
    private _nome : string;
    private _preco : number;
    private _descricao : string;
    private _quantidadeEstoque : number;

    constructor(nome : string,preco : number,descricao : string,quantidadeEstoque : number){
        this._nome = nome;
        this._preco = preco;
        this._descricao = descricao;
        this._quantidadeEstoque = quantidadeEstoque;
    }
    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        if (nome.trim().length > 0) {
            this._nome = nome;
        } else {
            throw new Error("O nome do produto não pode ser vazio.");
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

    get descricao(): string {
        return this._descricao;
    }

    set descricao(descricao: string) {
        if (descricao.trim().length > 0) {
            this._descricao = descricao;
        } else {
            throw new Error("A descrição do produto não pode ser vazia.");
        }
    }

    get quantidaEstoque(): number {
        return this._quantidadeEstoque;
    }

    set quantidadeEstoque(quantidadeEstoque: number) {
        if (quantidadeEstoque >= 0) {
            this._quantidadeEstoque = quantidadeEstoque;
        } else {
            throw new Error("A Quantida de Produtos no Estoque deve ser maior que 0 .");
        }
    }

    toString(): string {
        return `Serviço: ${this._nome}, Preço: R$ ${this._preco.toFixed(2)}, Descrição: ${this._descricao}, Quantidade no Estoque :${this._quantidadeEstoque}`;
    }
}