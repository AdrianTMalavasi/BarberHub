import { Avaliacao } from "./Avaliacao";
import { Cliente } from "./Cliente";
import { Funcionario } from "./Funcionario";
import { Servico } from "./Servico";

export class Agendamento {
    private _status : string;
    private _dataHoraAgendamento : Date;
    private _servico : Servico;
    private _cliente : Cliente;
    private _funcionario : Funcionario;
    private _avaliacao : Avaliacao;

    constructor(status : string,dataHoraAgendamento : Date , servico : Servico, cliente : Cliente, funcionario : Funcionario ,avaliacao : Avaliacao){
        this._status = status;
        this._dataHoraAgendamento = dataHoraAgendamento;
        this._servico = servico;
        this._cliente = cliente;
        this._funcionario = funcionario;
        this._avaliacao = avaliacao;
    }
    private validarInstancia(nome: string, obj: any, tipoEsperado: Function): void {
        if (!(obj instanceof tipoEsperado)) {
            throw new Error(`${nome} inválido! Esperado uma instância de ${tipoEsperado.name}.`);
        }
    }

    get status(): string {
        return this._status;
    }

    set status(status: string) {
        if (status.trim().length > 0) {
            const statusPermitidos = ["agendado", "concluído", "cancelado"]; // Exemplo de status predefinidos
            if (statusPermitidos.includes(status.toLowerCase())) {
                this._status = status;
            } else {
                throw new Error(`Status inválido! Os status permitidos são: ${statusPermitidos.join(", ")}`);
            }
        } else {
            throw new Error("Status não pode ser vazio!");
        }
    }

    get dataHoraAgendamento(): Date {
        return this._dataHoraAgendamento;
    }

    set dataHoraAgendamento(dataHoraAgendamento: Date) {
        if (dataHoraAgendamento instanceof Date && !isNaN(dataHoraAgendamento.getTime())) {
            if (dataHoraAgendamento > new Date()) { // Verifica se a data é no futuro
                this._dataHoraAgendamento = dataHoraAgendamento;
            } else {
                throw new Error("Data de agendamento não pode ser no passado!");
            }
        } else {
            throw new Error("Data de Agendamento inválida!");
        }
    }

    get servico(): Servico {
        return this._servico;
    }

    set servico(servico: Servico) {
        this.validarInstancia("Serviço", servico, Servico);
        this._servico = servico;
    }

    get cliente(): Cliente {
        return this._cliente;
    }

    set cliente(cliente: Cliente) {
        this.validarInstancia("Cliente", cliente, Cliente);
        this._cliente = cliente;
    }

    get funcionario(): Funcionario {
        return this._funcionario;
    }

    set funcionario(funcionario: Funcionario) {
        this.validarInstancia("Funcionário", funcionario, Funcionario);
        this._funcionario = funcionario;
    }

    get avaliacao(): Avaliacao {
        return this._avaliacao;
    }

    set avaliacao(avaliacao: Avaliacao) {
        this.validarInstancia("Avaliação", avaliacao, Avaliacao);
        this._avaliacao = avaliacao;
    }

    toString(): string {
        return `
        Agendamento:
        Status: ${this._status}
        Data do Agendamento: ${this._dataHoraAgendamento}
        Serviço: ${this._servico}
        Funcionário: ${this._funcionario}
        Avaliação: ${this._avaliacao}`;
    }
}
