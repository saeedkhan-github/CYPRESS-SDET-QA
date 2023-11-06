/// <reference types="cypress"/>
import { Login } from "./Login";
import { PatientDrawer } from "./PageObject/PatientDrawer";

let patientdrawer = new PatientDrawer;
describe('Test VoiceClip in the patient channel', () => {
    it('Sending Voice clip in the patient channel', () => {
        cy.visit('https://webapp.hucu.us/login');
        Login();
        patientdrawer.OpenPatientChannel('Allen Osinski'); 
        cy.wait(3000);
        // cy.get('div.patient-name').contains('John Dav').click();
        // cy.get('button.ui tiny icon primary button send-button').click();
        
        cy.get('.tiny > .ui').click();
        cy.log("Recording voice Clip");
        cy.wait(5000);
        cy.get('.VoiceClipRecorder_buttonOK__1xIoQ > .ui').click();
        cy.get('.tiny > .ui').click().then(()=>{
            cy.get("i[class='play icon']").last().click();
            });
        

    })
    
  })