import { Login } from "./Login.cy";
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
    then((checkbookmark)=>{
        const texta= checkbookmark.text();
        cy.log(texta);
    // cy.get('span[class="item-text bookmark"]').should('have.text',"Bookmark the Message").click();
    // cy.get("div[class='msg_attachment_style content']").last().find('.bookmark-icon > .ui').should('be.visible');
    //     });
    // go to notification center Bookmark tab and verifiy the bookmarked message 
    // cy.get('.notification-container > .ui').click();
    //     cy.get('.pointing > :nth-child(4)').click();
    //     cy.get('#messagesList > .comments > :nth-child(1) > .msg_attachment_style > .text > div').should('have.text','testing message bookmarkd');



    })

    
    
    
  })