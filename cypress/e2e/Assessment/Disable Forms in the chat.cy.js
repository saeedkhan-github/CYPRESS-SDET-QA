
import { Login } from "../Login";
beforeEach(function() {

    Login('joy','Zoha@123');
    cy.wait(3000);
    
  });
  describe('Test Assessment Form disabled', () => {
    it('Click on the diabled assessment form in the chat ',()=>{
       
        // search for the Disabled forms patient channel 
        cy.get('.search-input > .ui > input').click();
        cy.get('.search-input > .ui > input').type('Disabled Forms');
        cy.get('.patient-info').click();
        cy.wait(2000);
      // click on the last form PHQ9 already exist in the chat 
        cy.get('.msg_attachment_style > .attached-forms > .attached-form').last().click();
        cy.wait(2000);
        // Confirm the Error message 
        cy.get('.rrt-title').should('have.text','Error');
        cy.get('.rrt-text').should('have.text','You do not have access to this form. Please contact Admin.');
        
    })

})
// The PHQ9 form must be last sended message in the patient channel 
// The PHQ9 form should be disable from the admin cofiguration 