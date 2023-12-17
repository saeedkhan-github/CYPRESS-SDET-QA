/// <reference types="cypress-xpath" />
import { Login } from "../Login";
import { PatientDrawer } from "../PageObject/PatientDrawer.js";

let patientdrawer = new PatientDrawer;

describe('Toggle Channel Label', () => {
    it('Toggle Patient Mode Lable Test',()=>{
       
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('ResizeObserver loop completed with undelivered notifications')
            done()
            return false
          })
       Login("sq.test1");  // Login into the Hucu Webapp.

      cy.wait(5000);
       cy.get('.channel-container.patient-container',{timeout:10000}).first().should('be.visible').click();  // open any top patient channel 
        cy.wait(2000);
        
        cy.get('.thumb-container.thumb-container-left').trigger('mouseover')
        cy.get('.learn-more-tool-tip-container.tool-tip-container-patient').then($el=>{

            expect($el).to.have.text('You are in Care Team ModeLearn More')

        })

        cy.get('.tooltip-btn-test').click()
        cy.get('.channel_description_text').
        should('have.text','Messages in BLUE mode can ONLY be viewed by care team professionals.\n\nAdd/remove authorized professionals/collaborators when needed.')
        cy.wait(2000);
        cy.get('.actions > .ui').click();

        cy.get('.family-icon').click();
        cy.get('..ui.image.thumb-icon').trigger('mouseover');
        cy.get('.learn-more-tool-tip-container.tool-tip-container-patient').then($el=>{

            expect($el).to.have.text('You are in Patient/Family Mode More')

        })
       

     })

    it.skip('Toggle Family channel Lable test',()=>{
        Login(); // Login into the Hucu Webapp.
        cy.intercept("GET","https://api.hucu.us/api/v2/entities/*/locations/*/patients").as('LoadPatients');
        
        
        cy.wait("@LoadPatients",{timeout:10000}).then(()=>{
            cy.get('.channel-container.patient-container').first().should('be.visible',{timeout:10000}).click();  // open any top patient channel

        })
        
        // cy.wait(2000);
        cy.get('.family-icon').click();
        cy.get('..ui.image.thumb-icon').trigger('mouseover');
        cy.get('.learn-more-tool-tip-container.tool-tip-container-patient').then($el=>{

            expect($el).to.have.text('You are in Patient/Family Mode More')

        })
        

        
        // cy.get('.tooltip-btn-test').click()
        // cy.get('.channel_description_text').

        
    })
});

// should('contain','You are in Care Team Mode');