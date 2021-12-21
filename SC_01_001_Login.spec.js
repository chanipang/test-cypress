// <reference types="cypress" />

describe('Prepop', () => {
    context('dashboard page', () => {

        it('prepop.shippop and Click link', () => {
            cy.visit('http://prepop.shippop.com')
            cy.get('form div[class="form-group material-floater"]').first().type('chanisorn.shippop@gmail.com')
            //.contains('E-Mail').type('chanisorn.shippop@gmail.com')
            cy.get('form div input[type="password"]').type('123456789')
            cy.get('div button[type="submit"]').click()
        })
    })
})
