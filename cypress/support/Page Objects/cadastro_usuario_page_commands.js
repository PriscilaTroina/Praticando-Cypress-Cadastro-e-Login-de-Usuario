
Cypress.Commands.add('preencheNome', (nome) => {
    //Encontra o campo nome e preenche por parâmetro
    cy.get('#user').type(nome)
})


Cypress.Commands.add('preencheEmail', (email) => {
    //Encontra o campo e-mail e preenche por parâmetro
    cy.get('#email').type(email)

})

Cypress.Commands.add('preencheSenha', (senha) => {
    //Encontra o campo e-mail e preenche por parâmetro
    cy.get('#password').type(senha)

})


Cypress.Commands.add('btnRegistrar', () => {
    //Encontra botão registrar e clica
    cy.get('#btnRegister').click()
})

Cypress.Commands.add('validaMensagemErro', (mensagem) => {
    //Encontra mensagem e verifica
    cy.get('.errorLabel')
        .should('be.visible')
        .should('have.text', mensagem)
})

Cypress.Commands.add('validaMensagemSucesso', (nome) => {
    //Encontra mensagem e verifica
    cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')
    cy.get('#swal2-html-container').should('have.text', `Bem-vindo ${nome}`)
})

