describe('Testing app',function(){

   

    it('Post a new Post',()=>{
        cy.visit('https://the-internet.herokuapp.com/broken_images')
        cy.get('div img').first().should('be.visible')
        .invoke('prop','naturalWidth').then((width)=>{

            cy.log('Natural widht of image is : '+width)
            expect(width).to.be.greaterThan(0);
        })
    })
})