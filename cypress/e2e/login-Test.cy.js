import userData from '../fixtures/users/userData.json' 

describe('orange HRM tests', () => {
  
  const SelectorList = {
    usernameField: "[name='username']",  
    passwordField: "[name='password']",  
    loginButton: "[type='submit']",  
    userError: "[role='alert']",  
    passWordRequiered: '.oxd-input-group > .oxd-text',
    userNameRequiered: '.oxd-input-group > .oxd-text',
    deshboardGrid: ".orangehrm-dashboard-grid",
    sectionTitleTopbar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    infoFirstNameField: "[name='firstName']",
    infoLastNameField: "[name='lastName']",
  }

  const linksAcess = {
    loginlik: '/auth/login',
    indexhomepage: 'web/index.php/dashboard/index'
  }
//Login tests
it('Login - fail', () => {
    cy.visit(linksAcess.loginlik)
    cy.get(SelectorList.usernameField).type(userData.userFail.username)
    cy.get(SelectorList.passwordField).type(userData.userSucess.password)
    cy.get(SelectorList.loginButton).click()
    cy.get(SelectorList.userError)
  })
  it('Login - fail wrong password', () => {
    cy.visit(linksAcess.loginlik)
    cy.get(SelectorList.usernameField).type(userData.userSucess.username)
    cy.get(SelectorList.passwordField).type(userData.userFail.password)
    cy.get(SelectorList.loginButton).click()
    cy.get(SelectorList.userError)
  })
  it('Login - fail wrong Login', () => {
    cy.visit(linksAcess.loginlik)
    cy.get(SelectorList.usernameField).type(userData.userFail.username)
    cy.get(SelectorList.passwordField).type(userData.userSucess.password)
    cy.get(SelectorList.loginButton).click()
    cy.get(SelectorList.userError)
  })
  it('Login - fail  Login without loguin name', () => {
    cy.visit(linksAcess.loginlik)
    cy.get(SelectorList.passwordField).type(userData.userSucess.password)
    cy.get(SelectorList.loginButton).click()
    cy.get(SelectorList.userNameRequiered)
  })
  it('Login - fail wrong Login without passWord', () => {
    cy.visit(linksAcess.loginlik)
    cy.get(SelectorList.usernameField).type(userData.userSucess.username)
    cy.get(SelectorList.loginButton).click()
    cy.get(SelectorList.passWordRequiered)
  })
  it('Login - all black', () => {
    cy.visit(linksAcess.loginlik)
    cy.get(SelectorList.loginButton).click()
    cy.get(SelectorList.usernameField)
  })

})