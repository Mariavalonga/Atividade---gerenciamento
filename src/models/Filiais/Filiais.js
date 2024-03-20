import {v4 as uuidv4} from 'uuid';

export default class Filiais {
    constructor(id, nome, fundacao, quantidadeFuncionarios,
        capacidade, quantidadeTurmas, enderecoBairro, enderecoCidade,
        enderecoCep, telefone, email, responsavelNome, responsavelEmail,
        responsavelCargo) {
            this.id = uuidv4();
            this.nome = nome;
            this.fundacao = fundacao;
            this.quantidadeFuncionarios = quantidadeFuncionarios;
            this.quantidadeTurmas = quantidadeTurmas;
            this.enderecoBairro = enderecoBairro;
            this.enderecoCidade = enderecoCidade;
            this.enderecoCep = enderecoCep;
            this.telefone = telefone;
            this.email = email;
            this.responsavelNome = responsavelNome;
            this.responsavelEmail = responsavelEmail;
            this.responsavelCargo = responsavelCargo;
    }
}