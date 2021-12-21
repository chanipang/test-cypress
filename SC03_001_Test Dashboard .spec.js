/// <reference types="cypress" />
//Cypress.Cookies.defaults({
    preserve: 'check_token',
//})

describe('Prepop', () => {
    context('dashboard page', () => {

        it('prepop.shippop and Click link', () => {
            cy.visit('http://prepop.shippop.com')
            cy.get('form div[class="form-group material-floater"]').first().type('chanisorn.shippop@gmail.com')
            cy.get('form div input[type="password"]').type('123456789')
            cy.get('div button[type="submit"]').click()

            //it('จัดการขนส่ง',() =>{
                cy.wait(3000)
                cy.get('li a i[class="fas fa-truck text-yellow"]').click()
                //cy.contains('จัดการขนส่ง').click()
            
            //it('จัดการสมาชิก',() =>{
                    cy.wait(4000)
                    cy.get('li a i[class="fas fa-user-cog text-primary"]').click()
            
            //it('จัดการตัวแทนจำหน่าย', () => {
                        cy.wait(4000)
                        cy.get('li a i[class="fas fa-users text-warning"]').click()
            
            //it('จัดการร้านค้า (ทุกสาขา)', () => {
                        cy.wait(5000)
                        cy.get('li a i[class="fas fa-store text-red"]').click()
            
            //it('จัดการสมาชิก POP SHIPPOP', () => {
                        cy.wait(5000)
                        cy.get('li a i[class="fas fa-address-book text-purple"]').click()
            
            //it('ระบบบัญชี',() => {
                            cy.wait(5000)
                            cy.get('li a i[class="fas fa-landmark text-warning"]').click()
                            //cy.contains('ระบบบัญชี').click()
                //รายงานลูกค้า
                            cy.wait(5000)
                            cy.get('ul a i[class="fas fa-people-carry"]').click()
                //รายงานร้านค้า
                
                            cy.wait(5000)
                            cy.get('li a i[class="fas fa-landmark text-warning"]').click()
                            cy.wait(3000)
                            cy.get('ul a i[class="fas fa-clipboard-check"]').click()
                
                            cy.wait(5000)
                            cy.get('li a i[class="fas fa-landmark text-warning"]').click()
                            cy.wait(3000)
                            cy.get('ul a i[class="fas fa-id-badge"]').click()
        //it('รายงาน',() => {
                            cy.wait(3000)
                            cy.get('li a i[class="fas fa-folder-open text-green"]').click()
          //ระบบ POP SHIPPOP
                            cy.wait(3000)
                            cy.get('ul a i[class="fas fa-tachometer-alt"]').click()
                        
                            cy.wait(3000)
                            cy.get('li a i[class="fas fa-folder-open text-green"]').click()
                            cy.wait(3000)
                            cy.get('ul a i[class="fas fa-hand-holding-usd"]').click()
                        
                            cy.wait(3000)
                            cy.get('li a i[class="fas fa-folder-open text-green"]').click()
                            cy.wait(3000)
                            cy.get('ul a i[class="fas fa-chart-line"]').click()
                        
                            cy.wait(3000)
                            cy.get('li a i[class="fas fa-folder-open text-green"]').click()
                            cy.wait(3000)
                            cy.get('ul a i[class="fas fa-coins"]').click()
                        
                            cy.wait(3000)
                            cy.get('li a i[class="fas fa-folder-open text-green"]').click()
                            cy.wait(3000)
                            cy.get('ul a i[class="fas fa-box"]').click()
            
        
       })
    })
})
