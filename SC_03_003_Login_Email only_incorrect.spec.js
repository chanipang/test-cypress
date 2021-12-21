// <reference types="cypress" />

describe('Prepop', () => {
    context('dashboard page', () => {

        it('Display Please fill out', () => {
            cy.visit('http://prepop.shippop.com')
            cy.get('form div[class="form-group material-floater"]').first().type(' ')
            //cy.get('form div input[type="password"]').type(' ')
            cy.wait(1000)
            cy.get('div button[type="submit"]').click()
        })
    })
})
