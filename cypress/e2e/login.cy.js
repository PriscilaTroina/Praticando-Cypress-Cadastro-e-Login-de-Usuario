
import { faker } from '@faker-js/faker'


describe('Login', () => {

    const email = faker.internet.email()

    beforeEach('Acessando a aplicação', () => {

        //Acessando tela de Login
        cy.AcessarLogin()
    })

    it('E-mail e senha vazio', () => {
        //clica no botão login
        cy.botaoLogin()

        //Valida mensagem de erro
        cy.validaMsgErro('E-mail inválido.')
    })

    it('E-mail vazio', () => {
        //Preenche senha e clica no botão login
        cy.preencheSenha('123456')
        cy.botaoLogin()

        //Valida mensagem de erro
        cy.validaMsgErro('E-mail inválido.')
    })

    
    it('E-mail inválido', () => {
        //Preenche email inválido, senha e clica no botão login
        cy.preencheEmailLogin('priscila.com.br')
        cy.preencheSenha('123456')
        cy.botaoLogin()

        //Valida mensagem de erro
        cy.validaMsgErro('E-mail inválido.')
    })

    it('Senha vazia', () => {
        //Preenche email e clica no botão login
        cy.preencheEmailLogin(email)
        cy.botaoLogin()

        //Valida mensagem de erro
        cy.validaMsgErro('Senha inválida.')
    })

    it('Senha inválida', () => {
        //Preenche email, senha inválida e clica no botão login
        cy.preencheEmailLogin(email)
        cy.preencheSenha('12345')
        cy.botaoLogin()

        //Valida mensagem de erro
        cy.validaMsgErro('Senha inválida.')
    })

    it('Login com sucesso', () => {
        //Preenche e-mail e senha corretamente e faz o login
        cy.preencheEmailLogin(email)
        cy.preencheSenha('123456')
        cy.botaoLogin()

        //Valida mensagem de sucesso
        cy.SucessoMsgLogin(email)
    })

    it.only('Ainda não tem conta', () => {
        //Clica no 'Ainda não tem conta' para fazer cadastro
        cy.cliqueAindaNaoTemConta()

        //Verifica se acessou tela de cadastro
        cy.verificaDirecionamentoCadastro('Cadastro de usuário')
    })


})