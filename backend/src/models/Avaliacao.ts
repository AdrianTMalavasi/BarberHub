import { Cliente } from "./Cliente";

export class Avaliacao {
    private _nota : number;
    private _comentario : string;
    private _dataAvaliacao : Date;
    private _cliente : Cliente[];

    constructor (nota : number, comentario : string ,dataAvaliacao : Date ,cliente : Cliente[]){
        this._nota = nota;
        this._comentario = comentario;
        this._dataAvaliacao = dataAvaliacao;
        this._cliente = cliente;
    }

    get nota(): number {
        return this._nota;
    }

    set nota(nota: number) {
        if (nota >= 0 && nota <= 10) {
            this._nota = nota;
        } else {
            throw new Error("Nota deve estar entre 0 e 10!");
        }
    }

    get comentario(): string {
        return this._comentario;
    }

    set comentario(comentario: string) {
        if (comentario.trim().length > 0) {
            this._comentario = comentario;
        } else {
            throw new Error("Comentário não pode ser vazio!");
        }
    }

    get dataAvaliacao(): Date {
        return this._dataAvaliacao;
    }

    set dataAvaliacao(data: Date) {
        if (data instanceof Date && !isNaN(data.getTime())) {
            this._dataAvaliacao = data;
        } else {
            throw new Error("Data de avaliação inválida!");
        }
    }

    get cliente(): Cliente[] {
        return this._cliente;
    }

    set cliente(cliente: Cliente[]) {
        if (cliente.length > 0) {
            this._cliente = cliente;
        } else {
            throw new Error("A avaliação deve ter pelo menos um cliente associado!");
        }
    }

    toString(): string {
        return ` Avaliação:
        Nota: ${this._nota} 
        Comentário: ${this._comentario}
        Data: ${this._dataAvaliacao.toLocaleDateString()}
        Cliente: ${this._cliente.map(cliente => cliente.toString()).join(", ")}`;
    }
} 
