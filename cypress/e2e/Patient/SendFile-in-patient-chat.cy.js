
import { Login } from "../Login.js";
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
      patientdrawer.OpenPatientChannel('Test File')
      cy.wait(2000);
      // attach file in the chat 
      uploading.sendFile();//  arugments is optional 
      // Send file in the chat
      cy.wait(8000);
      cy.get('.tiny > .ui').click();
    
    });
  
  });

