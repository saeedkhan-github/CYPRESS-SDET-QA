import { Login } from "../Login";
import { PatientDrawer } from "../PageObject/PatientDrawer";
import { faker } from '@faker-js/faker';

let patientdrawer = new PatientDrawer;

describe('Patient Notes', () => {
    it('Open Patient channel and update the patient Notes',()=>{
       
        
       Login();
        // open any top patient channel 
        patientdrawer.OpenPatientChannel('John Dav');
        
        cy.wait(2000);
    
        patientdrawer.ClickPatientDrawer();         // Open Patient Channel Menu.
        patientdrawer.ChannelMenu('Patient Profile');   // Open Patient Profile in the List. 
        
        // cy.get("textarea[placeholder='Create Notes']").should('have.text','');
        cy.get('.pencil').click();
        cy.get("textarea[placeholder='Create Notes']").click().clear().then(($el)=>{
            cy.wrap($el).should('not.be.empty').type(faker.lorem.words(4));
        })
        cy.get('.status-button > :nth-child(2) > .ui').click();
        //verify success message 
        cy.get('.rrt-text').should('have.text','Patient notes has been Updated successfully');
        
        // Get the width and height of the viewport
        cy.window().then((win) => {
        const viewportWidth = win.innerWidth;
        const viewportHeight = win.innerHeight;
  
        // Calculate the middle coordinates
        const middleX = viewportWidth / 2;
        const middleY = viewportHeight / 2;
  
            // Click on the middle of the page
             cy.get('body').click(middleX, middleY);
        });
  
        cy.wait(1000);
        //verify annoucment message in the chat
        cy.get("div[class='msg_attachment_style content']").last().find('.text').contains('updated the notes to:')
       
    })
  
  })
