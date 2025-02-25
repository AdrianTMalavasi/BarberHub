import { Pessoa } from "./Pessoa";
import { Telefone } from "./Telefone";
import { Email } from "./Email"; 
import { Endereco } from "./Endereco";
import { Servico } from "./Servico";
import { Funcionario } from "./Funcionario";

export abstract class PessoaJuridica extends Pessoa {
    private _CNPJ: string;
    private _razaoSocial: string;
    private _nomeFantasia: string;
    private _servicos: Servico[];
    private _funcionarios: Funcionario[]; 

    constructor(nome: string,login: string,senha: string,dataCadastro: Date,telefone: Telefone,email: Email,endereco: Endereco,CNPJ: string,razaoSocial: string,nomeFantasia: string,servicos: Servico[], funcionarios: Funcionario[]) {
        super(nome, login, senha, dataCadastro, telefone, email, endereco);
        this._CNPJ = CNPJ;
        this._razaoSocial = razaoSocial;
        this._nomeFantasia = nomeFantasia;
        this._servicos = servicos;
        this._funcionarios = funcionarios;
    }

    get CNPJ(): string {
        return this._CNPJ;
    }

    set CNPJ(cnpj: string) {
        if (/^\d{14}$/.test(cnpj)) {
            this._CNPJ = cnpj;
        } else {
            throw new Error("CNPJ inválido! Deve conter 14 dígitos numéricos.");
        }
    }

    get razaoSocial(): string {
        return this._razaoSocial;
    }

    set razaoSocial(razaoSocial: string) {
        if (razaoSocial.trim().length > 0) {
            this._razaoSocial = razaoSocial;
        } else {
            throw new Error("Razão Social não pode ser vazia.");
        }
    }

    get nomeFantasia(): string {
        return this._nomeFantasia;
    }

    set nomeFantasia(nomeFantasia: string) {
        if (nomeFantasia.trim().length > 0) {
            this._nomeFantasia = nomeFantasia;
        } else {
            throw new Error("Nome Fantasia não pode ser vazio.");
        }
    }

    get servicos(): Servico[] {
        return [...this._servicos]; // Retorna uma cópia para evitar mutações externas
    }

    set servicos(servicos: Servico[]) {
        if (Array.isArray(servicos)) {
            this._servicos = servicos;
        } else {
            throw new Error("Os serviços devem ser uma lista válida.");
        }
    }

    get funcionarios(): Funcionario[] {
        return [...this._funcionarios]; // Retorna uma cópia para proteger a integridade dos dados
    }

    set funcionarios(funcionarios: Funcionario[]) {
        if (Array.isArray(funcionarios)) {
            this._funcionarios = funcionarios;
        } else {
            throw new Error("Os funcionários devem ser uma lista válida.");
        }
    }

    toString(): string {
        return `
            ${super.toString()}  
            CNPJ: ${this._CNPJ}
            Razão Social: ${this._razaoSocial}
            Nome Fantasia: ${this._nomeFantasia}
            Serviços: ${this._servicos.length > 0 ? this._servicos.map(s => s.toString()).join(", ") : "Nenhum"}
            Funcionários: ${this._funcionarios.length > 0 ? this._funcionarios.map(f => f.toString()).join(", ") : "Nenhum"}
        `;
    }
}