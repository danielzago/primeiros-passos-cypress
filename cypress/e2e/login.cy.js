describe('orange HRM tests', () => {
  it('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('assert','web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })
  it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('test')
    cy.get("[name='password']").type('test')
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")
  })
  it('Login - fail wrong password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('test')
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")
  })
  it('Login - fail wrong Login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('test')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.get("[role='alert']")
  })
  it('Login - all black', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[type='submit']").click()
    cy.get("[novalidate='']")
  })

})