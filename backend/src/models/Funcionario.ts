import { Email } from "./Email";
import { Endereco } from "./Endereco";
import { PessoaFisica } from "./PessoaFisica";
import { Telefone } from "./Telefone";

export class Funcionario extends PessoaFisica {
    private _cargo: string;
    private _salario: number;
    private _bonificacao: number;

    constructor(nome: string, login: string, senha: string, dataCadastro: Date, telefone: Telefone, email: Email, endereco: Endereco, genero: string, CPF: string, dataNascimento: Date, cargo: string, salario: number, bonificacao: number) {
        super(nome, login, senha, dataCadastro, telefone, email, endereco, genero, CPF, dataNascimento);
        this._cargo = cargo;
        this._salario = salario;
        this._bonificacao = bonificacao;
    }

    get cargo(): string {
        return this._cargo;
    }

    set cargo(cargo: string) {
        if (cargo.trim() !== "") {
            this._cargo = cargo;
        } else {
            throw new Error("Cargo não pode ser vazio!");
        }
    }

    get salario(): number {
        return this._salario;
    }

    set salario(salario: number) {
        if (salario >= 0) {
            this._salario = salario;
        } else {
            throw new Error("Salário não pode ser negativo!");
        }
    }

    get bonificacao(): number {
        return this._bonificacao;
    }

    set bonificacao(bonificacao: number) {
        if (bonificacao >= 0) {
            this._bonificacao = bonificacao;
        } else {
            throw new Error("Bonificação não pode ser negativa!");
        }
    }
   

    // calcularSalarioTotal(): number {
    //     return this._salario + this._bonificacao;
    // }
    // Salário Total: R$${this.calcularSalarioTotal().toFixed(2)}

    toString(): string {
        return `
            ${super.toString()}
            Cargo: ${this._cargo}
            Salário Base: R$${this._salario.toFixed(2)}
            Bonificação: R$${this._bonificacao.toFixed(2)}
        `;
    }
}