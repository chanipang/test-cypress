// <reference types="cypress" />

describe('Prepop', () => {
    context('dashboard page', () => {

        it('prepop.shippop and Click link', () => {
            cy.visit('http://prepop.shippop.com')
            cy.get('form div[class="form-group material-floater"]').first().type('chanisorn.shippop@gmail.com')
            cy.wait(1000)
            cy.get('form div input[type="password"]').type('=_=+123')
            cy.get('div button[type="submit"]').click()
        })
    })
})
