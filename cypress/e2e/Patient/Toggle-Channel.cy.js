/// <reference types="cypress-xpath" />
import { Login } from "../Login";
import { PatientDrawer } from "../PageObject/PatientDrawer.js";

let patientdrawer = new PatientDrawer;

describe('Toggle Channel Label', () => {
    it('Verify patient mode label and Text',()=>{
       
        
       Login();  // Login into the Hucu Webapp.
      
       cy.get(':nth-child(1) > .content > .patient-info > .patient-name').should('be.visible',{timeout:10000}).click();  // open any top patient channel 
        cy.wait(2000);
        
        cy.get('.thumb-container.thumb-container-left').trigger('mouseover')
        cy.get('.learn-more-tool-tip-container.tool-tip-container-patient').then($el=>{

            expect($el).to.have.text('You are in Care Team ModeLearn More')

        })

        cy.get('.tooltip-btn-test').click()
        cy.get('.channel_description_text').
        should('have.text','Messages in BLUE mode can ONLY be viewed by care team professionals./n/nAdd/remove authorized professionals/collaborators when needed.')
        
       

  })
});

// should('contain','You are in Care Team Mode');