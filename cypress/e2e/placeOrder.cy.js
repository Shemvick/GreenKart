/// <reference types="cypress" />
describe('template spec', () => {

it('TC_001 A user places order', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('[class="search-keyword"]').type('ca')
    cy.wait(2000)
    cy.get('[class="products"]').should('have.length', 1)
    cy.wait(2000)
    cy.get('.product:visible').should('have.length', 4)
    cy.get(':nth-child(3) > .product-action > button').click()

    //  Ensure the 3rd product is 'Capsicum'
    cy.get('.product').eq(2).find('.product-name').should('have.text', 'Capsicum')

    // Add 'Capsicum' to the cart
cy.get('.product').eq(2).find('.product-action').contains('ADD TO CART').click()

 // Verify the item has been added
cy.get('.added').should('have.text', '✔ ADDED')

// Iterate through the products to find 'Cashews' and add it to the cart
cy.get('.product').each(($el, index, $list) => {
    const textVeg = $el.find('h4.product-name').text()

    if (textVeg.includes('Cashews')) {
      // Add 'Cashews' to the cart
      cy.wrap($el).find('button').click()
      cy.wrap($el).find('.added').should('have.text', '✔ ADDED')

  }
  })
})
})




  // it('TC_002 A user places multiple order', () => {
  //   cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
  //   cy.get('[class="search-keyword"]').type('cassava')
  // })
