export class PatientDrawer{

    ClickPatientDrawer(){
        cy.get(':nth-child(1) > .angle').click();
    }

    OpenPatientChannel(patient='Test Patient'){
        cy.get('.search-input > .ui > input').type(patient);
        cy.get('.patient-info').click();
        // send a message in the chat
        cy.get("#messageInput").click();
        
      
    }
    PatientProfileClick(){
        cy.get('.angle.down.icon').click();
    }

}