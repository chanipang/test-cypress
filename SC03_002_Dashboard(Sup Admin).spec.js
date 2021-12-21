/// <reference types="cypress" />

describe('Prepop', () => {
    context('dashboard page', () => {

        it('prepop.shippop and Click link', () => {
            cy.visit('http://prepop.shippop.com')
            cy.get('form div[class="form-group material-floater"]').first().type('chanisorn836@gmail.com')
            cy.get('form div input[type="password"]').type('123456789')
            cy.get('div button[type="submit"]').click()
        })
        it('Left Menu Dashboard Role SupAdmin',() =>{
            cy.wait(1000)
            cy.get('li a i[class="fas fa-truck text-yellow"]').click()
            
            cy.wait(1000)
            cy.get('li a i[class="fas fa-store text-red"]').click()
            
            //ระบบยืนยันตัวตน
            cy.wait(3000)
            cy.get('li a i[class="fas fa-clipboard-check text-blue"]').click()
            
            //cy.get('li a i[class="fas fa-clipboard-check text-blue"]').click()
            cy.wait(3000)
            cy.get('ul a i[class="fas fa-id-card"]').first().click()

            cy.get('li a i[class="fas fa-clipboard-check text-blue"]').click()
            cy.wait(4000)
            cy.get('ul a i[class="fas fa-coins"]').click()

           //ระบบ pop shippop
            cy.get('li a i[class="fas fa-folder-open text-green"]').first().click()
            cy.wait(2000)
            cy.get('ul a i[class="fas fa-tachometer-alt"]').click()

            cy.wait(3000)
            cy.get('li a i[class="fas fa-folder-open text-green"]').first().click()
            cy.wait(2000)
            cy.get('a i[class="fas fa-hand-holding-usd"]').click()
            
            cy.wait(3000)
            cy.get('li a i[class="fas fa-folder-open text-green"]').first().click()
            cy.wait(2000)
            cy.get('a i[class="fas fa-chart-line"]').click()

        })
    })
})
