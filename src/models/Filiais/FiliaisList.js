export class FiliaisList {
    constructor () {
        this.filiais = [];
    }
    // Create
    createFiliais(filiais) {
        this.filiais.push(filiais);
    }
    // Read
    getAllFiliais() {
        return this.filiais;
    }
    getFiliaisById(id) {
        return this.filiais.find((filiais) => filiais.id === id);

    }
    // Update 
    updateFiliais(id, nome, fundacao, quantidadeFuncionarios,
        capacidade, quantidadeTurmas, enderecoBairro, enderecoCidade,
        enderecoCep, telefone, email, responsavelNome, responsavelEmail,
        responsavelCargo) {
            const filiais = this.getFiliaisById(id);

            if(!filiais) {
                return null;
            }
            filiais.id = id;
            filiais.nome = nome;
            filiais.fundacao = fundacao;
            filiais.quantidadeFuncionarios = quantidadeFuncionarios;
            filiais.capacidade = capacidade;
            filiais.quantidadeTurmas = quantidadeTurmas;
            filiais.enderecoBairro = enderecoBairro;
            filiais.enderecoCidade = enderecoCidade;
            filiais.enderecoCep = enderecoCep;
            filiais.telefone = telefone;
            filiais.email = email;
            filiais.responsavelNome = responsavelNome;
            filiais.responsavelEmail = responsavelEmail;
            filiais. responsavelCargo = responsavelCargo;

            return filiais;
            

    }
    //Delete
    excludeFiliais(filiaisId) {
        this.filiais = this.filiais.filter((filiais) => filiais.id !== filiaisId)
    }
}