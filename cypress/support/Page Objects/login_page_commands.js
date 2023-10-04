//Irei implementar nos próximos dias para praticar...

Cypress.Commands.add('preencheEmailLogin', (email) => {
   //clica no botão login
   cy.get('#user').type(email)
})

Cypress.Commands.add('botaoLogin', () => {
   //clica no botão login
   cy.get('#btnLogin').click()
})

Cypress.Commands.add('validaMsgErro', (mensagem) => {
   //valida mensagem de erro
   cy.get('.invalid_input')
      .should('have.text', mensagem)
})

Cypress.Commands.add('SucessoMsgLogin', (email) => {
   //Valida mensagem de sucesso ao fazer o login
   cy.get('#swal2-title')
      .should('have.text', 'Login realizado')
   cy.get('#swal2-html-container')
      .should('have.text', `Olá, ${email}`)
})

Cypress.Commands.add('cliqueAindaNaoTemConta', () => {
   // clica no ainda não tem conta
   cy.get('#createAccount').click()
})

Cypress.Commands.add('verificaDirecionamentoCadastro', (titulo) => {
   // verifica se está na tela de cadastro
   cy.get('.account_form > h3')
      .should('have.text', titulo)
   cy.get('#user')
      .should('be.visible')
   cy.get('#email')
      .should('be.visible')
   cy.get('#password')
      .should('be.visible')
})