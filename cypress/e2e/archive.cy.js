/// <reference types="Cypress" />
import { loginPage} from '../page_objects/login';
import { archivePage } from '../page_objects/archivePage';

describe('archive', ()=>{
    let archived;
    beforeEach('login',()=>{
        cy.visit('/')
        loginPage.login('test123@test.com', 'test12345')
        cy.url().should('not.include', '/login');

    })

    it('archive organization',()=>{
        cy.intercept({
            method: 'PUT',
             url:'https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/*/status'
           }).as('archive')
        archivePage.archive()
        cy.wait('@archive').then(interception=>{
            expect(interception.response.statusCode).to.exist
            expect(interception.response.statusCode).eq(200)
          })
    })
})