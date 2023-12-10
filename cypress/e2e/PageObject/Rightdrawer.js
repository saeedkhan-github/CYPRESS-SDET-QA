export class Rightdrawer {

   
    Location(loc){
        cy.get('.angle.right.large.icon').should('be.visible',{setTimeout:10000}).click();
        cy.get("input[placeholder='Search']").click().type(loc);
    }

}
