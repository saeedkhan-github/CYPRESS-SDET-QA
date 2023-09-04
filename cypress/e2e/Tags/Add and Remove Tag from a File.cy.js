
import { Login } from "../Login";
import { PatientDrawer } from "../PageObject/PatientDrawer.js";
import { uploads } from "../PageObject/uploads.js";
let patientdrawer = new PatientDrawer;
let uploading = new uploads;

describe('Add and Remove Tags in a Singl File', () => {
    beforeEach(() => {
      Login();
    });
  
    it('Add Tags in a Single File',()=>{
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
      cy.get("div[name='Payment']").click();
      cy.get("div[name='CT XRY']").click();
     
      cy.get('.add-tags-screen-contents > .primary')
      cy.get("button[class='ui primary button add-tag-done-button']").click();
      cy.wait(2000);
      // cy.get('.media-header-container:first-child').click();
      cy.get('.media-header-container > .ui').click();
      cy.wait(2000);

      cy.get('.tagChipContainer.tagChipContainerTouch').should('contain','All Tags');
      cy.get('.tagChipContainer.tagChipContainerTouch').should('contain','Payment');
      cy.get('.tagChipContainer.tagChipContainerTouch').should('contain','CT XRY');
      

    })
   

    it('Romve tags from a Single file ',()=>{
   
      patientdrawer.OpenPatientChannel('Tags Patient')
      cy.wait(2000);
      patientdrawer.PatientProfileClick();
      cy.get('.channel_list_item').contains('Files').click().then(()=>{
        cy.get('.cardHeading').contains('Photos').click();
      })
 
      cy.get("span.media-header-action-text").click();
      cy.get("div:nth-of-type(2) > div.item-selection-container > img").click();
      cy.get("div.media-header-container > div > span").click();
      cy.get("div.bottom div:nth-of-type(2) > div").click();
      
      cy.get('.tagChipContainer >.crossChipContainer').then(($e)=>{
       
          for(let i=0; i<$e.length; i++)
          {
            cy.get('.tagChipContainer >.crossChipContainer').eq(0).click();
            cy.wait(1000);
          }
      })
    

      cy.get("body > div.ui button").click();
      cy.get('.media-header-container > .ui').click();
      cy.get('.media-header-container > .ui').click();
      cy.wait(1000);
      cy.get('.tagChipContainer.tagChipContainerTouch').should('have.length',1);
  })
   

  });
