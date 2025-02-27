describe('orange HRM tests', () => {
  
  const SelectorList = {
    usernameField: "[name='username']",  
    passwordField: "[name='password']",  
    loginButton: "[type='submit']",  
    userError: "[role='alert']",  
    passWordRequiered: '.oxd-input-group > .oxd-text',
    userNameRequiered: '.oxd-input-group > .oxd-text',
    sectionTitleTopbar: ".oxd-topbar-header-breadcrumb > .oxd-text"  
  
  };
  
  
  it('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorList.usernameField).type('Admin')
    cy.get(SelectorList.passwordField).type('admin123')
    cy.get(SelectorList.loginButton).click()
    cy.location('pathname').should('assert','web/index.php/dashboard/index')
    cy.get(SelectorList.sectionTitleTopbar).contains('Dashboard')
  })
  it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorList.usernameField).type('test')
    cy.get(SelectorList.passwordField).type('test')
    cy.get(SelectorList.loginButton).click()
    cy.get(SelectorList.userError)
  })
  it('Login - fail wrong password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorList.usernameField).type('Admin')
    cy.get(SelectorList.passwordField).type('test')
    cy.get(SelectorList.loginButton).click()
    cy.get(SelectorList.userError)
  })
  it('Login - fail wrong Login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorList.usernameField).type('test')
    cy.get(SelectorList.passwordField).type('admin123')
    cy.get(SelectorList.loginButton).click()
    cy.get(SelectorList.userError)
  })
  it('Login - fail  Login without loguin name', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorList.passwordField).type('admin123')
    cy.get(SelectorList.loginButton).click()
    cy.get(SelectorList.userNameRequiered)
  })
  it('Login - fail wrong Login without passWord', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorList.usernameField).type('Admin')
    cy.get(SelectorList.loginButton).click()
    cy.get(SelectorList.passWordRequiered)
  })
  it('Login - all black', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorList.loginButton).click()
    cy.get(SelectorList.usernameField)
  })

})