/// <reference types="Cypress" />
import { loginPage} from '../page_objects/login';

describe('login', ()=>{
    let validEmail = 'test123@test.com'
    let validPassword = 'test12345'
    before('visit login page', ()=>{
        cy.visit('/')
    })
    it('valid login', ()=>{
        cy.intercept({
           method: 'POST',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
          }).as('validLogin')

          cy.url().should('include', '/login');
          loginPage.login(validEmail, validPassword)
          cy.wait('@validLogin').then(interseption=>{
            expect(interseption.response.statusCode).to.exist
            expect(interseption.response.statusCode).eq(200)
          })
       
    })
})