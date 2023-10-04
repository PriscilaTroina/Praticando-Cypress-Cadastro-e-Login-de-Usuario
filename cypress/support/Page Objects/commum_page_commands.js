

Cypress.Commands.add('AcessarCadastroUsuario', () => {
    cy.visit('/')

    //Valida que entrou na home
    cy.get('.top_header_left > p').should('be.visible')

    //Acessa tela de cadastro
    cy.get('.fa-lock').click()

})

Cypress.Commands.add('AcessarLogin', () => {
    cy.visit('/')

    //Valida que entrou na home
    cy.get('.top_header_left > p').should('be.visible')

    //Acessa tela de login
    cy.get('.fa-user').click()
})