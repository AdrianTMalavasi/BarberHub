import { Agendamento } from "./Agendamento";
import { Pagamento } from "./Pagamento";
import { Produto } from "./Produto";

export class Comanda {
    private _pagamento: Pagamento;
    private _agendamento: Agendamento[];
    private _produtos: Produto[];

    constructor(pagamento: Pagamento, agendamento: Agendamento[], produtos: Produto[]) {
        this._pagamento = pagamento;
        this._agendamento = agendamento;
        this._produtos = produtos;
    }

    get pagamento(): Pagamento {
        return this._pagamento;
    }

    set pagamento(pagamento: Pagamento) {
        if (pagamento instanceof Pagamento) {
            this._pagamento = pagamento;
        } else {
            throw new Error('Pagamento inválido!');
        }
    }

    get agendamento(): Agendamento[] {
        return this._agendamento;
    }

    set agendamento(agendamento: Agendamento[]) {
        if (Array.isArray(agendamento) && agendamento.length > 0) {
            this._agendamento = agendamento;
        } else {
            throw new Error('Agendamento deve ser um array não vazio!');
        }
    }

    get produtos(): Produto[] {
        return this._produtos;
    }
    set produtos(produtos: Produto[]) {
        if (Array.isArray(produtos) && produtos.length > 0) {
            this._produtos = produtos;
        } else {
            throw new Error('Produtos deve ser um array não vazio!');
        }
    }


}

