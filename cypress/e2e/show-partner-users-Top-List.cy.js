/// <reference types="cypress"/>
import { Login } from "./Login";
import { PatientDrawer } from "./PageObject/PatientDrawer";
import { Rightdrawer } from "./PageObject/Rightdrawer.js";

let patientdrawer = new PatientDrawer;
let rightdrawer= new Rightdrawer;
describe('Test for user Listing in Partner Location', () => {
    it('Show parnter users in top listing', () => {
        cy.visit('https://webapp.hucu.us/login');
        // cy.visit('https://webapp.hucu.ai/login'); // prod
        Login('sk.user');
        // Login('saeed.khan',"Hania@1519")
        cy.wait(5000);

    
        rightdrawer.Location('haripur');
        // rightdrawer.Location("St. Mary's Hospital"); // pointing to prod
        
        cy.get('.location-info-bold.ellipsis-text-wrapper').should('contain','haripur').click();
        // cy.get('.location-info-bold.ellipsis-text-wrapper').should('contain',"St. Mary's Hospital").click();  // prod
        cy.wait(3000);
        cy.get('.channel-container.patient-container').first().click();
        patientdrawer.PatientProfileClick();
        patientdrawer.ChannelMenu('Add Collaborators');

       cy.wait(3000);
        // cy.get('.list_header_title').eq(0).should('be.visible').should('contain','haripur-Current Location');
        cy.get('.relaxed > :nth-child(1) > .list_header_title').then($el=>{
            // console.log($el);
            expect($el.text()).to.include('haripur - Current Location')
            // expect($el.text()).to.include("St. Mary's Healt") // prod
        })
        // .should('exist').should('contain','haripur-Current Location',{ timeout: 5000 });
    })   
        
  })

//   cy.get('.list_header_title').each(($element, index, $list) => {
//     // Log the text of each element to the console
//     const text = $element.text().trim();
//     cy.log(`Element ${index + 1}: ${text}`);
//     console.log(`Element ${index + 1}: ${text}`);
//   });