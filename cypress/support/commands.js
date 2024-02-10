/// <reference types="cypress"/>
    require('@cypress/xpath');
    import "cypress-real-events";
    const user={
        username: 'qa.test1',
        password: 'Saeed123@'
    }
    Cypress.Commands.add('Login',(name,password)=>{

        
        
            cy.visit('https://webapp.hucu.us/login');
            cy.get('.fluid > input').click();
            cy.get('.fluid > input').type(name!=null?name:user.username);
            cy.get('.large').click();
            cy.get('form').submit();
            cy.get('.icon > input').click();
            cy.get('.icon > input').type(password!=null?password:user.password);
            cy.get('.large').click();
            cy.get('form').submit();
            cy.get('.pincode-input-text:nth-child(1)').type('1');
            cy.get('.pincode-input-text:nth-child(2)').type('1');
            cy.get('.pincode-input-text:nth-child(3)').type('1');
            cy.get('.pincode-input-text:nth-child(4)').type('1');
            cy.get('.pincode-input-text:nth-child(1)').type('1');
            cy.get('.pincode-input-text:nth-child(2)').type('1');
            cy.get('.pincode-input-text:nth-child(3)').type('1');
            cy.get('.pincode-input-text:nth-child(4)').type('1');
            cy.wait(5000);
            cy.get('.close-toastr').click();
           
        // end of session 
    })

    Cypress.Commands.add('LoginWithSession',(name,password)=>{

        cy.session([name,password],()=>{
            cy.visit('https://webapp.hucu.us/login');
            cy.get('.fluid > input').click();
            cy.get('.fluid > input').type(name!=null?name:user.username);
            cy.get('.large').click();
            cy.get('form').submit();
            cy.get('.icon > input').click();
            cy.get('.icon > input').type(password!=null?password:user.password);
            cy.get('.large').click();
            cy.get('form').submit();
            cy.get('.pincode-input-text:nth-child(1)').type('1');
            cy.get('.pincode-input-text:nth-child(2)').type('1');
            cy.get('.pincode-input-text:nth-child(3)').type('1');
            cy.get('.pincode-input-text:nth-child(4)').type('1');
            cy.get('.pincode-input-text:nth-child(1)').type('1');
            cy.get('.pincode-input-text:nth-child(2)').type('1');
            cy.get('.pincode-input-text:nth-child(3)').type('1');
            cy.get('.pincode-input-text:nth-child(4)').type('1');
            cy.wait(5000);
            cy.get('.close-toastr').click();
        },{cacheAcrossSpecs:true})

       
    })
    
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
