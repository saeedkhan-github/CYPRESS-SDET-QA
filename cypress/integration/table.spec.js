/// <reference types="cypress"/>

describe('Table Data Test', () => {
    it('Access Tablue Column', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.table-display tr td:nth-child(2)').each(($el,index,$list)=>{
            const text =$el.text();
            if(text.includes('Python')){
                cy.get('.table-display tr td:nth-child(2)').eq(index).next().then((price)=>{

                   const pricetotal= price.text()
                   expect(pricetotal).to.equal('25');

                })
            }
        })
    
    })
   
  })