import { Telefone } from "./Telefone";
import { Email } from "./Email";
import { Endereco } from "./Endereco";

export abstract class Pessoa {
    private static contadorId = 1;
    private _id: number;
    private _nome: string;
    private _login: string;
    private _senha: string;
    private _dataCadastro: Date;
    private _telefone: Telefone;
    private _email: Email;
    private _endereco: Endereco;

    constructor(nome: string, login: string, senha: string, dataCadastro: Date, telefone: Telefone, email: Email, endereco: Endereco) {
        this._id = Pessoa.contadorId++;
        this._nome = nome;
        this._login = login;
        this._senha = senha;
        this._dataCadastro = dataCadastro;
        this._telefone = telefone;
        this._email = email;
        this._endereco = endereco;
    }

    get id(): number {
        return this._id;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string | undefined) {
        if (nome && nome.trim() !== "") {
            this._nome = nome;
        }
    }

    get senha(): string {
        return this._senha;
    }

    set senha(senha: string | undefined) {
        if (senha !== undefined && senha.trim() !== "") {
            this._senha = senha;
        }
    }

    toString(): string {
        return `Pessoa: ${this._nome}, ${this._telefone.toString()}, ${this._email.toString()}, ${this._endereco.toString()},${this._dataCadastro}`;
    }
}