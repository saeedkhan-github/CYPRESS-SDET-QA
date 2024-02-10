export class PatientDrawer {

    ClickPatientDrawer() {
        cy.get(':nth-child(1) > .angle').click();
    }

    OpenPatientChannel(patient = 'Test Patient') {
        cy.get('.search-input > .ui > input').type(patient);
        cy.get(':nth-child(6) > :nth-child(1) > .content').click();
        // send a message in the chat
        // cy.get("#messageInput").click();


    }
    PatientProfileClick() {
        cy.get('.angle.down.icon').click();
    }
    ChannelMenu(text) {
        cy.get('.channel-menu').contains(text).click();
    }
    Location(loc){
        cy.get('.angle.right.large.icon').click();
        cy.get("input[placeholder='Search']").click().type(loc);
    }

}
