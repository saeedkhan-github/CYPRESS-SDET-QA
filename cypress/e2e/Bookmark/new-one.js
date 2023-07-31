/// <reference types="cypress"/>
import { Login } from "../Login/Login.cy";

    describe('bookmark', () => {
        it('Bookmark a message', () => {
        cy.visit('https://Webapp.hucu.us/login');
        Login()
        cy.wait(10000)
    


        //Bookmark message 1st method
        //open channel      
        cy.get('.search-input > .ui > input').click()      //click on search tab
        cy.get('.search-input > .ui > input').type('Arooj Patient') //enter patient name
        cy.wait(5000)
        cy.get('.item > .content').click()
        cy.wait(5000)
        cy.get("div[class='msg_attachment_style content']").last().rightclick()
        cy.wait(2000)

        cy.get("div[class='react-contexify react-contexify__will-enter--fade']").contains('Bookmark the Message').then(
            function() { cy.get('span[class="item-text bookmark"]').click() }
            //function() {cy.get('span[class="item-text remove-bookmark"]').click() }
          )
          .catch(Bookmark the Message) => {
            cy.log(`Function failed with error`);
            //cy.get('span[class="item-text remove-bookmark"]').click()
          });

        // .then(()=>{
        //     cy.get('span[class="item-text bookmark"]').click()

        // },()=>{ 
        //     cy.get('span[class="item-text remove-bookmark"]').click()

        // })

          
    //      // Check if the message is bookmarked
    //          cy.get('span[class="item-text bookmark"]').last().then(($messagesList) => {
    //            // Check if the message is already bookmarked
    //           if ($messagesList.hasClass('bookmarked')) {
    //          // If bookmarked, remove the bookmark
    //          cy.contains('Bookmark the Message').click()
    //              cy.get('.bookmark-message').should('have.text', 'Removed Bookmark')
    //            } else {
    //             // If not bookmarked, bookmark the message
    //          cy.contains('Bookmark the Message').click()
    //          cy.get('.bookmark-message').should('have.text', 'Bookmark the Message')
    //            }
    //          })
           })
     })

