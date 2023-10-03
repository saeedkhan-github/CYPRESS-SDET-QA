/// <reference types="cypress-xpath" />
import { Login } from "../Login";
import { PatientDrawer } from "../PageObject/PatientDrawer.js";
import { faker } from '@faker-js/faker';

let patientdrawer = new PatientDrawer;

describe('Patient Profile Test ', () => {
    it('Verify Patient Flags Header in the profile',()=>{
       
        
       Login();
        // open any top patient channel 
        patientdrawer.OpenPatientChannel('Patient Profile');
        cy.wait(2000);
        patientdrawer.ClickPatientDrawer();
        patientdrawer.ChannelMenu('Patient Profile');
        cy.get('div.patient-header-flags').should('have.length',2);
        // cy.xpath("//div[@class='ui grid']//div[4]").find('.patient-header-flag');
        // div[class='ui grid'] div:nth-child(4)
  
  })
});
