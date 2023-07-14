
import { Login } from "../Login.cy";
import { PatientDrawer } from "../PageObject/PatientDrawer.js";
import { uploads } from "../PageObject/uploads.js";
let patientdrawer = new PatientDrawer;
let uploading = new uploads;

describe('Test Honor Point the patient channel', () => {
    beforeEach(() => {
      Login();
    });
  
    it('Give Honor point in the patient chat', () => {
      
  
      // Open patient channel 
      patientdrawer.OpenPatientChannel('Test File')
      cy.wait(2000);
      // attach file in the chat 
      uploading.sendMultipleFile();//  arugments is optional 
      // Send file in the chat
      cy.get('.tiny > .ui').click();
    
    });
  
  });

