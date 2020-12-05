describe('Shopping cart view', () => {
  it('should show correct information when empty', () => {
    cy.visit('/cart');

    cy.findByRole('heading', { name: /Cart$/ }).should('be.visible');
    cy.findByRole('button', { name: /add to cart/i }).should('not.exist');
    cy.findByRole('button', { name: /checkout/i }).should('be.visible');
    cy.findByRole('button', { name: /clear cart/i }).should('not.exist');
    cy.findAllByText(/no items in cart/i).should('have.length', 2);
  });

  it('should show added items correctly', () => {
    cy.visit('/');

    // SHOW ONE ITEM IN CART ========================================
    cy.findAllByRole('button', { name: /add to cart/i })
      .should('have.length', 3)
      .first()
      .click();

    cy.findByRole('link', { name: /cart/i }).should('be.visible').click();
    cy.findByRole('button', { name: /remove item/i }).should('be.visible');
    cy.findByRole('button', { name: /clear cart/i }).should('be.visible');
    cy.findByText(/no items in cart/i).should('not.exist');
    // =============================================================

    // REMOVE ADDED ITEM INDIRECTLY ================================
    cy.findByRole('link', { name: /whee/ }).should('be.visible').click();
    cy.findAllByRole('button', { name: /add to cart/i }).should(
      'have.length',
      2
    );
    cy.findByRole('button', { name: /remove from cart/i })
      .should('be.visible')
      .click();

    cy.findByRole('link', { name: /cart/i }).should('be.visible').click();

    cy.findByRole('button', { name: /add to cart/i }).should('not.exist');
    cy.findByRole('button', { name: /checkout/i }).should('be.visible');
    cy.findByRole('button', { name: /clear cart/i }).should('not.exist');
    cy.findAllByText(/no items in cart/i).should('have.length', 2);
    // =============================================================

    // ADD TWO ITEMS TO CART ========================================
    cy.findByRole('link', { name: /whee/ }).should('be.visible').click();
    cy.findAllByRole('button', { name: /add to cart/i })
      .should('have.length', 3)
      .first()
      .click();
    cy.findAllByRole('button', { name: /add to cart/i })
      .should('have.length', 2)
      .last()
      .click();
    cy.findAllByRole('button', { name: /remove from cart/i }).should(
      'have.length',
      2
    );
    cy.findByRole('link', { name: /cart/i }).should('be.visible').click();

    cy.findByText(/Circle/i).should('be.visible');
    cy.findByText(/Triangle/i).should('be.visible');
    cy.findByText(/Rectangle/i).should('not.exist');
    cy.findAllByRole('button', { name: /remove item/i }).should(
      'have.length',
      2
    );
    cy.findByRole('button', { name: /add to cart/i }).should('not.exist');
    cy.findByRole('button', { name: /checkout/i }).should('be.visible');
    cy.findByRole('button', { name: /clear cart/i }).should('be.visible');

    cy.findByText(/2.?008/i).should('be.visible');
    // ====================================================================

    // REMOVE ITEM IN SHOPPING CART ======================================
    cy.findAllByRole('button', { name: /remove item/i })
      .first()
      .click();
    cy.findAllByRole('button', { name: /remove item/i }).should(
      'have.length',
      1
    );
    cy.findByText(/2.?008/i).should('not.exist');
    cy.findByText(/1.?009/i).should('be.visible');
    cy.findByText(/Circle/i).should('not.exist');
    cy.findByText(/Triangle/i).should('be.visible');
    // =============================================================

    // REMOVE LAST CART-ITEM INDIRECTLY ============================
    cy.findByRole('link', { name: /whee/ }).should('be.visible').click();
    cy.findAllByRole('button', { name: /remove from cart/i })
      .should('have.length', 1)
      .first()
      .click();
    cy.findByRole('link', { name: /cart/i }).should('be.visible').click();

    cy.findByRole('button', { name: /clear cart/i }).should('not.exist');
    cy.findAllByText(/no items in cart/i).should('have.length', 2);
    // =============================================================
  });
});
