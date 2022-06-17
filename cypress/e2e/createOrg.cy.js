/// <reference types="Cypress" />
import { createPage} from '../page_objects/createPage';
import { loginPage } from '../page_objects/login';
const faker = require ('@faker-js/faker')

describe('create organization', () =>{
    let validName = faker.random.alpha({ count: 5 });
    let orgId;

    beforeEach('login',()=>{
        cy.visit('/')
        loginPage.login('test123@test.com', 'test12345')
        cy.url().should('not.include', '/login');

    })
    it('create org',()=>{
        cy.intercept({
            method: 'POST',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/organizations'
        }).as('createOrg')

        createPage.create(validName)
        cy.wait('@createOrg').then(interception => {
            orgId = interception.response.body.id
            expect(interception.response.body.name).eq(validName)
            expect(interception.response.statusCode).to.exist
            expect(interception.response.statusCode).eq(201)
            //createPage.myOrganizationTitle.should('be.visible')
            //    .and('have.text', validName)
           //     .and('have.css', 'color', 'rgb(255, 255, 255)')
            cy.visit(`/organization/${orgId}`)
            
          })
    })
})