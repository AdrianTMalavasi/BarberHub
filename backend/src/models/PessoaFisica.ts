import { Pessoa } from "./Pessoa";
import { Telefone } from "./Telefone";
import { Email } from "./Email"; 
import { Endereco } from "./Endereco";

export abstract class PessoaFisica extends Pessoa {
    private _genero: string;
    private _CPF: string;
    private _dataNascimento: Date;

    constructor(nome: string, login: string, senha: string, dataCadastro: Date, telefone: Telefone, email: Email, endereco: Endereco ,genero: string, CPF: string, dataNascimento: Date) {
        super(nome ,login ,senha ,dataCadastro ,telefone ,email,endereco)
        this._genero = genero;
        this._CPF = CPF;
        this._dataNascimento = dataNascimento;
    }

    get genero(): string {
        return this._genero;
    }

    set genero(genero: string) {
        const generosValidos = ['Masculino', 'Feminino', 'Outro'];
        if (generosValidos.includes(genero)) {
            this._genero = genero;
        } else {
            throw new Error("Gênero inválido! Os valores válidos são: 'Masculino', 'Feminino', 'Outro'.");
        }
    }

    get CPF(): string {
        return this._CPF;
    }

    set CPF(CPF: string) {
        const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/; // Valida o formato "XXX.XXX.XXX-XX"
        if (regexCPF.test(CPF)) {
            this._CPF = CPF;
        } else {
            throw new Error("CPF inválido! O formato correto é XXX.XXX.XXX-XX.");
        }
    }

    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    set dataNascimento(dataNascimento: Date) {
        const hoje = new Date();
        if (dataNascimento <= hoje) {
            this._dataNascimento = dataNascimento;
        } else {
            throw new Error("Data de nascimento inválida! Não pode ser no futuro.");
        }
    }

    toString(): string {
        return `Gênero: ${this._genero}, CPF: ${this._CPF}, Data de Nascimento: ${this._dataNascimento.toLocaleDateString()}`;
    }
}