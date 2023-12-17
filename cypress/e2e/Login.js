const user={
    username: 'qa.test1',
    password: 'Saeed123@'
}
function Login(name,password){

    cy.visit('https://webapp.hucu.us/login');
    cy.get('.fluid > input').click();
    cy.get('.fluid > input').type(name!=null?name:user.username);
    cy.get('.large').click();
    cy.get('form').submit();
    cy.get('.icon > input').click();
    cy.get('.icon > input').type(password!=null?password:user.password);
    cy.get('.large').click();
    cy.get('form').submit();
    cy.get('.pincode-input-text:nth-child(1)').should('be.visible').type('1',{timeout:5000});
    cy.get('.pincode-input-text:nth-child(2)').type('1');
    cy.get('.pincode-input-text:nth-child(3)').type('1');
    cy.get('.pincode-input-text:nth-child(4)').type('1');
    cy.get('.pincode-input-text:nth-child(1)').type('1');
    cy.get('.pincode-input-text:nth-child(2)').type('1');
    cy.get('.pincode-input-text:nth-child(3)').type('1');
    cy.get('.pincode-input-text:nth-child(4)').type('1');
    // .then(() => {
    //     cy.document().should('exist');  // Wait for the document to exist
    //   });  
    cy.wait(5000);
    cy.get('.close-toastr').click()
}

export{Login}