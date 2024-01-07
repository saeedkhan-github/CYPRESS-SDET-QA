
import { Login } from "../Login.js";
import { PatientDrawer } from "../PageObject/PatientDrawer.js";
import { uploads } from "../PageObject/uploads.js";
let patientdrawer = new PatientDrawer;
let uploading = new uploads;

describe('Send file in the Chat', () => {
    

    before(()=>{

      Login();
      Cypress.on('uncaught:exception', (err, runnable) => {
        // we expect a 3rd party library error with message 'list not defined'
        // and don't want to fail the test so we return false
        if (err.message.includes('ResizeObserver loop completed with undelivered notifications.')) {
          return false
        }
        // we still want to ensure there are no other unexpected
        // errors, so we let them fail the test
      })

     
     
  })
  
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

