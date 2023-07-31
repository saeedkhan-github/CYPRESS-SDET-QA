/// <reference types="cypress"/>
import { Login } from "../Login/Login.cy";

    describe('bookmark', () => {
    it('Bookmark a message', () => {
        cy.visit('https://Webapp.hucu.us/login');
        Login()
        cy.wait(10000)

        //Remove Bookmark message
        //open channel      
        cy.get(':nth-child(6) > :nth-child(1) > .content').click()
        cy.wait(5000)
        //cy.get(':nth-child(6) > .comments > .comment > .msg_attachment_style')
        cy.get('.mention-tag > a').rightclick()
        cy.wait(2000)
        cy.contains('Remove Bookmark').click()
        cy.wait(4000)
        //cy.get('.sidebar').scrollTo('bottom')

        //Bookmark the message
        //open channel      
        //cy.get(':nth-child(6) > :nth-child(1) > .content').click()
        //cy.wait(5000)

        //cy.get(':nth-child(6) > .comments > .comment > .msg_attachment_style')
        cy.get('.mention-tag > a').rightclick()
        cy.wait(5000)
        cy.contains('Bookmark the Message').click()
        cy.wait(2000)
        //cy.get('.sidebar').scrollTo('bottom')
    })
})