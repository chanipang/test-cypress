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

        it('Log out', () => {
            cy.wait(5000)
            cy.get('div li div li div i[class="fas fa-caret-down pl-2"]').click()
            cy.wait(1000)
            cy.contains('ออกจากระบบ').click()

        })
    })
})
