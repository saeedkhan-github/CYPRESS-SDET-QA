
import { Login } from "../Login";
import { PatientDrawer } from "../PageObject/PatientDrawer.js";
import { uploads } from "../PageObject/uploads.js";
let patientdrawer = new PatientDrawer;
let uploading = new uploads;

describe('Send file in the Chat', () => {
    beforeEach(() => {
      Login();
    });
  
    it.skip('Add Tag in file attachment in patient menu',()=>{
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
    it('Remove tag from a File', () => {
      
  
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
      const gettagcross=[];
      cy.get('.crossChipContainer>.ui.image').as('crossbutton')
      cy.get('@crossbutton').each(($el)=>{
          
          cy.wrap($el).should('be.visible').click({force: true})
          cy.wait(2000);
         
      })
      // .then(()=>{
      //   for (let i = 0; i < gettagcross.length; i++) {
         
      //     cy.wrap(gettagcross[i]).should('be.visible').click({force:true});
      //     gettagcross.pop();
  
      //   }
      // })
      cy.get('.add-tags-screen-contents > .primary').click();
    
    
    });
    it.skip('Tag Multiple Files than remove tage one by one',()=>{
      patientdrawer.OpenPatientChannel('Tags Patient')
      cy.wait(2000);
      patientdrawer.PatientProfileClick();
      cy.get('.channel_list_item').contains('Files').click();
      cy.get('.cardHeading').contains('Photos').click();
      cy.get("span.media-header-action-text").click();
      cy.get("div:nth-of-type(2) > div.item-selection-container > img").click();
      cy.get("div:nth-of-type(3) > div.item-selection-container > img").click();
      cy.get("div.media-header-container > div > span").click();
      cy.get("div:nth-of-type(2) > div.media-types-option-item").click();
      cy.wait(2000);
      cy.get("body > div.ui div:nth-of-type(3) > div:nth-of-type(2) > div").click();
      cy.get("#\\33 8 > span").click();
      cy.get("body > div.ui button").click();
      cy.wait(2000);
      cy.get("div.media-header-container > .ui").click();
      cy.get('.tagChipContainer.tagChipContainerTouch').eq(0).should('have.text','All Tags');
      cy.get('.tagChipContainer.tagChipContainerTouch').eq(1).should('have.text','Tag Multi Files');


    })
    it.skip('Romve tag from file ',()=>{
     
        patientdrawer.OpenPatientChannel('Tags Patient')
        cy.wait(2000);
        patientdrawer.PatientProfileClick();
        cy.get('.channel_list_item').contains('Files').click();
        cy.get('.cardHeading').contains('Photos').click();
      
        
        cy.get("span.media-header-action-text").click();
        cy.get("div:nth-of-type(2) > div.item-selection-container > img").click();
        cy.get("div.media-header-container > div > span").click();
        cy.get("div.bottom div:nth-of-type(2) > div").click();
        cy.get("div.add-tags-screen-contents > div:nth-of-type(2) img").click();
        cy.get("body > div.ui button").click();
        cy.get("span.media-header-action-text").click();
        cy.get("div:nth-of-type(3) > div.item-selection-container > img").click();
        cy.get("div.media-header-container > div > span").click();
        cy.get("div.bottom div:nth-of-type(2) > div").click();
        cy.get("div.add-tags-screen-contents > div:nth-of-type(2) img").click();

        cy.get("body > div.ui button").click();
        cy.wait(2000);
        cy.get("div.media-header-container > .ui").click();
        cy.get('.tagChipContainer.tagChipContainerTouch').should('have.length',1);

    })

    
  
  });
