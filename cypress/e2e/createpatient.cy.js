/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';
import chai from 'chai';
import chaiDom from 'chai-dom';
chai.use(chaiDom);

// import { contains } from "cypress/types/jquery";
import { Login } from "./Login";
import { should } from 'chai';
     
var firstname ="John";
var lastName= 0;
var birthdate = 0;
var month = 0;
var PatientDate = 0;
var Phone = 0;

var sex ='Male';
describe('Test Create Patient Flow', () => {
   beforeEach(() => {
       firstname = faker.person.firstName();
       lastName= faker.person.lastName();
       birthdate = faker.date.birthdate();
       month = String(birthdate.getMonth()+1).padStart(2, '0');
       PatientDate = `${month}/${String(birthdate.getDate()).padStart(2,'0')}/${birthdate.getFullYear()}`;
       sex =faker.person.sex();
       Phone= faker.phone.number('773#######');
    Login("omar","Zoha@123");
      cy.wait(5000);
      
    });

   it('Create a new patient Channel',()=>{
      cy.wait(5000);
      cy.get(".add-icon.image.ui").eq(0).should("be.visible"); // Wait for an element matching the selector to become visible

      
      cy.get('.add-icon.image.ui').eq(0).click({force: true}).then(()=>{
        
         cy.get('.four > .ui').click();
          cy.get('.required:nth-child(1) input').type(firstname);
          cy.get('.required:nth-child(2) input').type(lastName);
          cy.get('.required:nth-child(3) input').type(PatientDate);
          cy.get('.selection').type(sex);
          cy.get('.selected').click();
          cy.intercept("POST", "https://api.hucu.us/api/v2/entities/*/locations/*/patients").as("apiRequest");
          cy.get('.blue').click();
                  cy.wait("@apiRequest").then((interception) => {
                  const response = interception.response;
                  expect(response.statusCode).to.eq(201);
               });

         
      });


   });

   it('Create a patient Channel and add Phone number check invite for the family channel',()=>{
      cy.wait(2000);
      cy.get(".add-icon.image.ui").eq(0).should("be.visible"); // Wait for an element matching the selector to become visible

      
      cy.get('.add-icon.image.ui').eq(0).click({force: true}).then(()=>{
        
         cy.get('.four > .ui').click();
          cy.get('.required:nth-child(1) input').type(firstname);
          cy.get('.required:nth-child(2) input').type(lastName);
          cy.get('.required:nth-child(3) input').type(PatientDate);
          cy.get('.selection').type(sex);
          cy.get('input[type="tel"]').type(Phone);
         //  cy.get('input[name="sendInvite"]').click();
         cy.contains('label', 'Invite Patient').click();
         
          cy.intercept("POST", "https://api.hucu.us/api/v2/entities/*/locations/*/patients").as("apiRequest");
          cy.get('.blue').click();
          cy.wait(2000);
                  cy.wait("@apiRequest").then((interception) => {
                  const response = interception.response;
                  expect(response.statusCode).to.eq(201);
                  expect(response.body.data.mobile_phone).to.eq('+1'+Phone);
                  // cy.log('printing '+Phone);
                  // cy.log(response.body.data.mobile_phone);
               });

         
      });

   })


    it('Test Creating patient channel already exists', () => {
    
      cy.get('.add-icon.image.ui').eq(0).click({force: true}).then(()=>{
        
        cy.get('.four > .ui').click();
         cy.get('.required:nth-child(1) input').type('shah');
         cy.get('.required:nth-child(2) input').type('khalid');
         cy.get('.required:nth-child(3) input').type('10/10/2001');
         cy.get('.selection').click();
         cy.get('.selected').click();
         cy.intercept("POST", "https://api.hucu.us/api/v2/entities/*/locations/*/patients").as("apiRequest");
         cy.get('.blue').click();
         cy.wait("@apiRequest").then((interception) => {
            const response = interception.response;
            expect(response.statusCode).to.eq(400);
         });

         // cy.get('form').submit();

         cy.get('#create-patient-modal:nth-child(1)').
         should('have.text','Patient channel already existsThe patient channel you are trying to create already exists: shah khalid 10/10/2001BackJoin Channel');
      
         cy.get('.blue').click();
         cy.get('.basic').click();
         // cy.get('.action-button-container > .ui').click();
        
         

    }  
    );


    
   

     


    });
   
  })// close of describe