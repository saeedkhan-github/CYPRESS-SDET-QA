/// <reference types="cypress-xpath" />
import { Login } from "../Login";
import { PatientDrawer } from "../PageObject/PatientDrawer.js";

let patientdrawer = new PatientDrawer;

describe('Patient Profile Test ', () => {
    it('Verify Flags Header and Acuity Score in the  Patient Channel and in the Patient profile',()=>{
       
        
       Login();  // Login into the Hucu Webapp.
        
        patientdrawer.OpenPatientChannel('Allen Osinski');  // open any top patient channel 
        cy.wait(2000);
        let score;          
        let patientFlags;
        
        cy.get('.score-text').invoke('text').then(text=>{
            score=text;               // Get the Patient Acuity Score in the Patient Channel Header.
        })

        cy.get('span.patient-header-flag').then(el=> patientFlags=el.length); // Get the Patient Flags in the Patient Channel Header. 

        patientdrawer.ClickPatientDrawer();         // Open Patient Channel Menu.
        patientdrawer.ChannelMenu('Patient Profile');   // Open Patient Profile in the List. 
        
        cy.log("Test Equity Score in the profile");
        cy.get('[style="font-size: 32px;"]').invoke('text').then(text=>{ // Get Acuity Score in the patient Profile 
          expect(text).to.eq(score);
        })
        
         cy.log('Test Patient Flag header in the profile..')
         cy.get('.column .patient-header-flag').then(el=>{   // Get the Patient Flags Header in the Patient Profile 
          expect(el.length).to.equal(patientFlags);
         });

  })
});
