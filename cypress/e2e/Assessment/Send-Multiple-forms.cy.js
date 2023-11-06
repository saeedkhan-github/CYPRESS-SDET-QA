import { Login } from "../Login";
beforeEach(function() {

    Login();
    cy.wait(3000);
    
  });

describe('My First Test', () => {
    it('click on alert',()=>{
        //cy.get('.family-icon').click();

        //Send Assessment
        //cy.get('.channel-selected > .content > .patient-info > .patient-name')
        //cy.get(':nth-child(5) > :nth-child(1) > .content').click()
        cy.get(':nth-child(1) > .content > .patient-info').click();
        cy.wait(2000)
        cy.get('.icon_form > .ui').click()
        cy.get('.active > .menu > :nth-child(2)').click()
        cy.wait(3000)
        cy.get('.icon_form > .ui').click()
        cy.get('.active > .menu > :nth-child(3)').click()
        cy.wait(3000)
        cy.get('.message-actions > .tiny').click()
        
        // Switch to the family channel and send multiple forms
        cy.get('.family-icon').click();
        cy.get('.icon_form > .ui').click()
        cy.get('.active > .menu > :nth-child(2)').click()
        cy.wait(2000)
        cy.get('.icon_form > .ui').click()
        cy.get('.active > .menu > :nth-child(3)').click()
        cy.wait(2000)
        cy.get('.message-actions > .tiny').click()

    })

})

