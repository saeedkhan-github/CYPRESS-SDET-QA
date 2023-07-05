/// <reference types="cypress"/>
describe('Table Data Test', () => {
    let data; // Define a variable to hold the fixture data
  
    before(() => {
      cy.fixture('example').then((exampleData) => {
        data = exampleData; // Assign the fixture data to the 'data' variable
      });
    });
  
    it('Display Data from fixture example file', () => {
      cy.log(data.name); // Log the value of 'name' property from the fixture data
      cy.log(data.email); // Log the value of 'email' property from the fixture data
    });
    
    // Log the productName value from the fixutre data
    it("Display Products from the fixture file",()=>{

        data.productName.forEach((product,index)=>{
            cy.log(product+" "+index)
        })

    })
  });
  