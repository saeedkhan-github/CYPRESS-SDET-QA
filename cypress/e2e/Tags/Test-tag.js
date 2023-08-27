
import { Login } from "../Login";
import { PatientDrawer } from "../PageObject/PatientDrawer.js";
import { uploads } from "../PageObject/uploads.js";
let patientdrawer = new PatientDrawer;
let uploading = new uploads;

describe('Send file in the Chat', () => {
    beforeEach(() => {
      Login();
    });
  
    it('Add Tags in a File',()=>{
      // Open patient channel 
      patientdrawer.OpenPatientChannel('Tags Patient')
      cy.wait(2000);
      patientdrawer.PatientProfileClick();
      cy.get('.channel_list_item').contains('Files').click();
      cy.get('.cardHeading').contains('Photos').click();
      
      cy.get("span.media-header-action-text").click();
      cy.get("div:nth-of-type(2) > div.item-selection-container > img").click();
      cy.get("div.media-header-container > div > span").click();
      cy.get("div.bottom div:nth-of-type(2) > div").click();
      cy.get('.ui.fluid.multiple.selection.dropdown').click();
      // Click on Tags to add 
      cy.get("div[name='CT XRY']").click();
      cy.get("div[name='Payment']").click();
      cy.get('.add-tags-screen-contents > .primary')
      cy.get("button[class='ui primary button add-tag-done-button']").click();
      cy.wait(2000);
      // cy.get('.media-header-container:first-child').click();
      cy.get('.media-header-container > .ui').click();
      cy.wait(2000);
      cy.get('.tagChipContainer.tagChipContainerTouch').eq(0).should('contain','All Tags');
      cy.get('.tagChipContainer.tagChipContainerTouch').eq(1).should('contain','Payment');
      cy.get('.tagChipContainer.tagChipContainerTouch').eq(2).should('contain','CT XRY');
      

    })
    it("Remove Tags from a File", () => {
      cy.get("div.left-menu input").click();
      cy.get("div.left-menu input").type("tag");
      cy.get("div.patient-info > div").click();
      cy.get("tr.channel-header i").click();
      cy.get("body > div.ui div:nth-of-type(6) > div > div").click();
      cy.get("div:nth-of-type(2) span.actionText").click();
      cy.get("span.media-header-action-text").click();
      cy.get("div:nth-of-type(2) > div.item-selection-container > img").click();
      cy.get("div.media-header-container > div > span").click();
      cy.get("div.bottom div:nth-of-type(2) > div").click();
      cy.get("div.add-tags-screen-contents > div:nth-of-type(2) > div:nth-of-type(1) img").click();
      cy.get("div.add-tags-screen-contents > div:nth-of-type(2) > div:nth-of-type(1) img").click();
      cy.get("div.add-tags-screen-contents > div:nth-of-type(2) img").click();
      cy.get("body > div.ui button").click();
      cy.get("body > div.ui").click();
    });
   
  

    
  
  });
