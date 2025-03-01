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
    infogenericField: ".oxd-input--active", // foi identificado um erro no site e varias trocas no site de teste então não está dando para usar esse ID para acesso de campos
    infoOtherId: ":nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input",
    infoEmployeId: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    infoDriverLicense: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
    infoHolderDataGeneric: "[placeholder='yyyy-dd-mm']",
    infoTestField: '.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    InfoDateCloseButton: ".--close",
    infoSubmitButtonGeneric: "[type='submit']",
    };

  
  const linksAcess = {
    loginlik: '/auth/login',
    indexhomepage: 'web/index.php/dashboard/index'
  }
  
  
  it.only('User info update - Success', () => {
    cy.visit(linksAcess.loginlik)
    cy.get(SelectorList.usernameField).type(userData.userSucess.username)
    cy.get(SelectorList.passwordField).type(userData.userSucess.password)
    cy.get(SelectorList.loginButton).click()
    cy.location('pathname').should('assert',linksAcess.indexhomepage)
    cy.get(SelectorList.deshboardGrid)
    cy.get(SelectorList.myInfoButton).click()

    //Personal Details
    //Personal Name
    cy.get(SelectorList.infoFirstNameField).clear().type("Jorginho")
    cy.get(SelectorList.infoLastNameField).clear().type("Da Coabe")
   // cy.get(SelectorList.infogenericField).eq(4).clear().type("Jorgin")  //(horas aparece o campo outras não)

   // ID emplyer and others
    cy.get(SelectorList.infoOtherId).clear().type("00002")
    cy.get(SelectorList.infoEmployeId).clear().type("0003")
    cy.get(SelectorList.infoDriverLicense).clear().type("516565465")
    cy.get(SelectorList.infoHolderDataGeneric).eq(0).clear().type("2025-03-01")
    cy.get(SelectorList.InfoDateCloseButton).click()
    cy.get(SelectorList.infoSubmitButtonGeneric).eq(0).click()
    cy.get('.oxd-toast')
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast')
    

  })


})