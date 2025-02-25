import { Email } from "./Email";
import { Endereco } from "./Endereco";
import { PessoaFisica } from "./PessoaFisica";
import { Telefone } from "./Telefone";

export class Cliente extends PessoaFisica {
    //private _pontuacao : number;

    constructor(nome: string, login: string, senha: string, dataCadastro: Date, telefone: Telefone, email: Email, endereco: Endereco, genero: string, CPF: string, dataNascimento: Date) {

        super(nome, login, senha, dataCadastro, telefone, email, endereco, genero, CPF, dataNascimento);

    }

    toString(): string {
        return `
            ${super.toString()}
        `;
    }
}