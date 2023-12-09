/// <reference types="cypress"/>
import { Login } from "./Login";
import { PatientDrawer } from "./PageObject/PatientDrawer";
import { Rightdrawer } from "./PageObject/Rightdrawer.js";

let patientdrawer = new PatientDrawer;
let rightdrawer= new Rightdrawer;
describe('Test for user Listing in Partner Location', () => {
    it('Show parnter users in top listing', () => {
        cy.visit('https://webapp.hucu.us/login');
        Login('sk.user');
        cy.wait(3000);

        // cy.get('.angle.right.large.icon').click();
        // cy.get("input[placeholder='Search']").click().type('haripur');
        rightdrawer.Location('haripur');
        cy.get('.location-info-bold.ellipsis-text-wrapper').should('contain','haripur').click();
        cy.wait(3000);
        cy.get('.channel-container.patient-container').first().click();
        patientdrawer.PatientProfileClick();
        patientdrawer.ChannelMenu('Add Collaborators');

       
        cy.get('.list_header_title').then($list=>{
            if(cy.wrap($list[0].invoke('text')).should('have.text','invited')){
                console.log($list[0].textContent);
                
            }
        })

    })   
        
  })

//   cy.get('.list_header_title').each(($element, index, $list) => {
//     // Log the text of each element to the console
//     const text = $element.text().trim();
//     cy.log(`Element ${index + 1}: ${text}`);
//     console.log(`Element ${index + 1}: ${text}`);
//   });