describe('Product view', () => {
  it('should have working navigation', () => {
    cy.visit('/');
    cy.findByText(/loading/i).should('be.visible');
    cy.findByText(/loading/i).should('not.exist');

    cy.findAllByRole('button', { name: /add to cart/i }).should(
      'have.length',
      3
    );

    cy.findByRole('heading', { name: /Cart$/ }).should('not.exist');
    cy.url().should('not.match', /cart$/);
    cy.findByRole('link', { name: /shopping cart/i })
      .should('be.visible')
      .click();
    cy.url().should('match', /cart$/);
    cy.findByRole('heading', { name: /Cart$/ }).should('be.visible');
    cy.findByRole('button', { name: /add to cart/i }).should('not.exist');
    cy.findByRole('button', { name: /checkout/i }).should('be.visible');
  });

  it('should correctly add and remove items to and from cart', () => {
    cy.visit('/');

    cy.findByText(/no items in cart/i).should('be.visible');

    cy.findByRole('heading', { name: /circle/i }).should('be.visible');
    cy.findByRole('heading', { name: /rectangle/i }).should('be.visible');
    cy.findByRole('heading', { name: /triangle/i }).should('be.visible');

    cy.findByRole('button', { name: /remove from cart/i }).should('not.exist');
    cy.findAllByRole('button', { name: /add to cart/i })
      .first()
      .should('be.visible')
      .click();
    cy.findByRole('button', { name: /adding to cart/i }).should('be.visible');
    cy.findByRole('button', { name: /adding to cart/i }).should('not.exist');
    cy.findAllByRole('button', { name: /add to cart/i }).should(
      'have.length',
      2
    );
    cy.findByRole('button', { name: /remove from cart/i }).should('be.visible');

    cy.findByText(/no items in cart/i).should('not.exist');
    cy.findByText(/1 item in cart/i).should('be.visible');

    cy.findAllByRole('button', { name: /add to cart/i })
      .last()
      .should('be.visible')
      .click();

    cy.findAllByRole('button', { name: /add to cart/i }).should(
      'have.length',
      1
    );
    cy.findAllByRole('button', { name: /remove from cart/i }).should(
      'have.length',
      2
    );

    cy.findByText(/1 item in cart/i).should('not.exist');
    cy.findByText(/2 items in cart/i).should('be.visible');

    cy.findByRole('link', { name: /shopping cart/i }).click();

    cy.findByRole('heading', { name: /circle/i }).should('be.visible');
    cy.findByRole('heading', { name: /rectangle/i }).should('not.exist');
    cy.findByRole('heading', { name: /triangle/i }).should('be.visible');

    cy.findByText(/2.?008/i).should('be.visible');

    cy.findByRole('link', { name: /whee/i }).should('be.visible').click();

    cy.findAllByRole('button', { name: /remove from cart/i }).should(
      'have.length',
      2
    );
  });

  it('should correctly remove items from the cart', () => {
    cy.visit('/');

    cy.findAllByRole('button', { name: /add to cart/i })
      .eq(1)
      .should('be.visible')
      .click();

    cy.findByText(/no items in cart/i).should('not.exist');
    cy.findByText(/1 item in cart/i).should('be.visible');

    cy.findByRole('button', { name: /remove from cart/i })
      .should('be.visible')
      .click();
    cy.findByRole('button', { name: /remove from cart/i }).should('not.exist');
    cy.findByText(/1 item in cart/i).should('not.exist');
    cy.findByText(/no items in cart/i).should('be.visible');

    cy.findAllByRole('button', { name: /add to cart/i })
      .first()
      .should('be.visible')
      .click();
    cy.findAllByRole('button', { name: /add to cart/i })
      .last()
      .should('be.visible')
      .click();

    cy.findByText(/no items in cart/i).should('not.exist');
    cy.findByText(/2 items in cart/i).should('be.visible');

    cy.findAllByRole('button', { name: /remove from cart/i })
      .first()
      .should('be.visible')
      .click();
    cy.findByText(/2 items in cart/i).should('not.exist');
    cy.findByText(/1 item in cart/i).should('be.visible');

    cy.findAllByRole('button', { name: /remove from cart/i }).should(
      'have.length',
      1
    );

    cy.findByRole('button', { name: /remove from cart/i })
      .should('be.visible')
      .click();
    cy.findByText(/no items in cart/i).should('be.visible');
  });
});
