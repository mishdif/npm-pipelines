describe('Check content in Testkube.io', function(){
  it('Visit the URL', function(){
    cy.visit('https://testkube.io');
  })
  
  it('Click on Test Artifact section',function(){
    cy.get('#w-tabs-0-data-w-tab-3').click();
  })
  
  it('Check section copy', function(){
    cy.contains('Ese);
  })


})
