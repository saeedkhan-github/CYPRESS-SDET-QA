export class Rightdrawer {

   
    Location(loc){
        cy.get('.angle.right.large.icon').click();
        cy.get("input[placeholder='Search']").click().type(loc);
    }

}
