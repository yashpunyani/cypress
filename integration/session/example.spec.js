describe('My First Test', () => {
    it('Visits the Research Application Form', () => {
      cy.visit('https://qa-frontend-cypress.s3.eu-west-1.amazonaws.com/cypress-session2.html')
      cy.get('[name=namec]').type('yash and password123')
      cy.get('[name=email]').type('email@seera.sa')
      cy.get('[name=street]').type('Tajwal, Eiffel 1, Sheikh Zayed RD')
      cy.get('[name=zipcode]').type('12345')
      cy.get('select').select('Russia')
      cy.get('[class=question-answer]>input[value=Yes]').check({force: true})
      cy.get('[value=Abstract]').check({force: true})
      cy.get('[type=submit]').click()

    })
  })