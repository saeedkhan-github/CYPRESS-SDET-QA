export class uploads{

    sendFile(filename='pic.jpeg'){
        // Attach the file, upload file via fixture, or direct upload by selectfile and path, 
      // The attachinput css display is non so use force ture / remove style attribute for the element
    
        // cy.fixture('pic.jpeg', { encoding: null }).as('myfixture')
        // cy.get('#attachInput').selectFile('cypress/fixtures/img.png',{ force: true })
        cy.get('input#attachInput').invoke('removeAttr', 'style').selectFile('cypress/fixtures/files/'+filename).
        then(()=>{
          cy.wait(2000);
          cy.get('.editor-attachment-name').should('be.visible');
          cy.get('.tiny > .ui').should('be.visible');
        })
        
            
    }
    sendMultipleFile(){
      let file1='pic.jpeg',file2='sample.pdf',file3='img.png';

      // Attach the file, upload file via fixture, or direct upload by selectfile and path, 
    // The attachinput css display is non so use force ture / remove style attribute for the element
  
      // cy.fixture('pic.jpeg', { encoding: null }).as('myfixture')
      // cy.get('#attachInput').selectFile('cypress/fixtures/img.png',{ force: true })
      if(arguments.length==0){
      cy.get('input#attachInput').selectFile('cypress/fixtures/files/'+file1,{ force: true })
      cy.get('input#attachInput').selectFile('cypress/fixtures/files/'+file2,{ force: true })
      cy.get('input#attachInput').selectFile('cypress/fixtures/files/'+file3,{ force: true })
       
      
    }else{
      for(let i=0; i<arguments.length; i++)
      {
        cy.get('input#attachInput').selectFile('cypress/fixtures/files/'+arguments[i],{ force: true })
      }
    }

    cy.wait(5000);          
    cy.get('.editor-attachment-name').should('be.visible');
    cy.get('.tiny > .ui').should('be.visible');
      
          
  }

}