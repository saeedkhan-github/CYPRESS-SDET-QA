/// <reference types="cypress"/>

// checking checkbox

describe("Basic Tests",()=>{

   
    it("visit the site",function(){
 
     cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

     cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
     cy.get('#checkBoxOption1').uncheck().should('not.be.checked');

     cy.get('input[type="checkbox"]').check(['option2','option3']);  // checks multiple checkbox with on basis of value
    
 
 
    })
 
 })
 
 