
import { Login } from "./Login";
beforeEach(function() {

    Login('joy','Zoha@123');
    cy.wait(8000);
    
  });

describe('Send a Message in the patient channel and bookmark the message, verify bookmark icon with the message in the chat', () => {
    it('Bookmark a message the patient channel', () => {
        
       
        cy.get('.search-input > .ui > input').click();

    cy.get('.search-input > .ui > input').type('Bookmark');
    cy.get('.patient-info').click();
    // send a message in the chat
    cy.get("#messageInput").click();
    cy.get("#messageInput").type("testing message bookmarkd");
    cy.get("button > img").click(); 
    cy.wait(2000);   

    cy.get("div[class='msg_attachment_style content']").last().find('.text').rightclick().
    then(()=>{
    cy.get('span[class="item-text bookmark"]').should('have.text',"Bookmark the Message").click();
    cy.get("div[class='msg_attachment_style content']").last().find('.bookmark-icon > .ui').should('be.visible');
        });
    // go to notification center Bookmark tab and verifiy the bookmarked message 
    cy.get('.notification-container > .ui').click();
        cy.get('.pointing > :nth-child(4)').click();
        cy.get('#messagesList > .comments > :nth-child(1) > .msg_attachment_style > .text > div').should('have.text','testing message bookmarkd');



    })

    it('Check the Bookmarked messaged in the right Drawer bookmark tab and remove the bookmakred message',()=>{

       

        cy.get('.notification-container > .ui').click();
        cy.get('.pointing > :nth-child(4)').click();
        cy.get('#messagesList > .comments > :nth-child(1) > .msg_attachment_style > .text > div').should('have.text','testing message bookmarkd');
        cy.get(':nth-child(1) > .msg_attachment_style').realHover();
        
        // bookmark icon with msg and click to remvoe the bookmakred message from the tab
        cy.get("div.bookmark-messages-list > div > div:nth-of-type(1) div.metadata img").should('be.visible').click(); 
        
    })
    
    
  })

    //  cy.get('div >.msg_attachment_style content').should(($div) => {
    //     // access the native DOM element
    //     expect($div.get(0).innerText).to.eq('foobarbaz')
    //   })