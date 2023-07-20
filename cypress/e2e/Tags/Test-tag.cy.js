
import { Login } from "../Login.cy";
import { PatientDrawer } from "../PageObject/PatientDrawer.js";
import { uploads } from "../PageObject/uploads.js";
let patientdrawer = new PatientDrawer;
let uploading = new uploads;

describe('Send file in the Chat', () => {
    beforeEach(() => {
      Login();
    });
  
    it('Open patient channel and send file/multiple files in the patient chat', () => {
      
  
      // Open patient channel 
      patientdrawer.OpenPatientChannel('Tags Patient')
      cy.wait(2000);
      patientdrawer.PatientProfileClick();
      cy.get('.channel_list_item').contains('Files').click();
      cy.get('.cardHeading').contains('Photos').click();
      cy.get('.media-header-action-text').click();
      cy.get('.ui>.image').click();
      
      
    
    });
  
  });
