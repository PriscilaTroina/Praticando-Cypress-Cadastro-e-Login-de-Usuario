
import { faker } from '@faker-js/faker'


describe('Cadastro de usuário', () => {

    const nome = faker.name.fullName()
    const email = faker.internet.email()

    beforeEach('Acessando a aplicação', () => {

        //Acessando tela de cadastro de usuário
        cy.AcessarCadastroUsuario()
    })


    it('Campo nome vazio', () => {
        //Preenche e-mail, senha e clica em registrar
        cy.preencheEmail(email)
        cy.preencheSenha('123456')
        cy.btnRegistrar()

        //Valida mensagem de retorno
        cy.validaMensagemErro('O campo nome deve ser prenchido')
    })

    it('Campo e-mail vazio', () => {
        //Preenche nome, senha e clica em registrar
        cy.preencheNome(nome)
        cy.preencheSenha('123456')
        cy.btnRegistrar()

        //Valida mensagem de retorno
        cy.validaMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo e-mail incorreto', () => {
        //Preenche nome, email, senha e clica em registrar
        cy.preencheNome(nome)
        cy.preencheEmail('priscila.troinagmail.com')
        cy.preencheSenha('123456')
        cy.btnRegistrar()

        //Valida mensagem de retorno
        cy.validaMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })

    it('Campo senha vazia', () => {
        //Preenche nome, email e clica em registrar
        cy.preencheNome(nome)
        cy.preencheEmail(email)
        cy.btnRegistrar()

        //Valida mensagem de retorno
        cy.validaMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Campo senha inválida', () => {
        //Preenche nome, email, senha inválida e clica em registrar
        cy.preencheNome(nome)
        cy.preencheEmail(email)
        cy.preencheSenha('12345')
        cy.btnRegistrar()

        //Valida mensagem de retorno
        cy.validaMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    })
    

    it('Cadastro com sucesso', () => {
        //Preenche nome, email, senha válida e clica em registrar
        cy.preencheNome(nome)
        cy.preencheEmail(email)
        cy.preencheSenha('123456')
        cy.btnRegistrar()


        //Valida mensagem de retorno
        cy.validaMensagemSucesso(nome)
    })
})