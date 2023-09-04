it('Tag Multiple Files than remove tage one by one',()=>{
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
  it.skip("Remove Tags from a File", () => {
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