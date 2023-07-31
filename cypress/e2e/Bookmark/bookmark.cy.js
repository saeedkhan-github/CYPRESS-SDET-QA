/// <reference types="cypress"/>
import { Login } from "../Login";

    describe('bookmark', () => {
    it('Bookmark a message', () => {
        cy.visit('https://Webapp.hucu.us/login');
        Login()
        cy.wait(10000)

        //Bookmark message 1st method
        //open channel      
        cy.get(':nth-child(6) > :nth-child(1) > .content').click()
        cy.wait(5000)
        cy.get(':nth-child(6) > .comments > .comment > .msg_attachment_style').rightclick()
        cy.wait(2000)
        cy.contains('Bookmark the Message').click()
        cy.wait(4000)

        //Bookmark messages 2nd method
        cy.get('.search-input > .ui > input').click()      //click on search tab
        cy.get('.search-input > .ui > input').type('Aby Abyy') //enter patient name
        cy.wait(5000)
        cy.get('.item > .content').click()
        cy.wait(5000)
        cy.get("div[class='msg_attachment_style content']").last().rightclick()
        cy.wait(2000)
        //cy.contains('Bookmark the Message').click()
        cy.get().should('have.text','Bookmark the Message').click()

        



        // cy.get("div[class='msg_attachment_style content']").last().find('.text').rightclick().then(()=>{
        //     cy.get('span[class="item-text bookmark"]').should('have.text',"Bookmark the Message").click();
        //     cy.get("div[class='msg_attachment_style content']").last().find('.bookmark-icon > .ui').should('be.visible');
        // });


        })

    })
    
