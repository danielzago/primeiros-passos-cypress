class myInfoPage{
    SelectorList(){
        const Selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active", // foi identificado um erro no site e varias trocas no site de teste então não está dando para usar esse ID para acesso de campos
            otherId: "':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'",
            employeId: ':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            driverLicense: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            holderDataGeneric: "[placeholder='yyyy-mm-dd']",
            dateCloseButton: ".--close",
            submitButtonGeneric: "[type='submit']",
            dropdownGeneric: ".oxd-select-text",
            genericFields: ".oxd-input",

    }
    return Selectors
    }
  
    fieldPersonalDetails(firstName, lastName){
        cy.get(this.SelectorList().firstNameField).clear().type(firstName)
        cy.get(this.SelectorList().lastNameField).clear().type(lastName)

    }
  

    fillEmployedDetails(employeIds, otherID, driverLicense, driverLicenseExpiry){
        cy.get(this.SelectorList().employeId).clear().type(employeIds)
        cy.get(this.SelectorList().genericField).eq(4).clear().type(otherID)
        cy.get(this.SelectorList().driverLicense).clear().type(driverLicense)
        cy.get(this.SelectorList().holderDataGeneric).eq(0).clear().type(driverLicenseExpiry)
        cy.get(this.SelectorList().dateCloseButton).click()

    }

 

    
    selectcountry(){
        cy.get(this.SelectorList().dropdownGeneric).eq(0).click(); // Abre o dropdown
        cy.get('.oxd-select-dropdown') // Seletor comum para a lista de opções no OrangeHRM
          .should('be.visible') // Garante que a lista apareceu
          .find('.oxd-select-option') // Encontra os itens da lista
          .contains('Brazilian') // Localiza o item "Brazilian"
          .click(); // Seleciona o item}
    }
    maritalStatus(){
        cy.get(this.SelectorList().dropdownGeneric).eq(1).click(); // Abre o dropdown
        cy.get('.oxd-select-dropdown') // Seletor comum para a lista de opções no OrangeHRM
          .should('be.visible') // Garante que a lista apareceu
          .find('.oxd-select-option') // Encontra os itens da lista
          .contains('Married') // Localiza o item "Married"
          .click(); // Seleciona o item}
    }

    bloodtype(){
        cy.get(this.SelectorList().dropdownGeneric).eq(2).click(); // Abre o dropdown
        cy.get('.oxd-select-dropdown') // Seletor comum para a lista de opções no OrangeHRM
          .should('be.visible') // Garante que a lista apareceu
          .find('.oxd-select-option') // Encontra os itens da lista
          .contains('AB+') // Localiza o item "AB+"
          .click(); // Seleciona o item
    }

        saveSubmit(){
            cy.get(this.SelectorList().submitButtonGeneric).eq(0).click({force: true})
            cy.get('.oxd-toast')
        }
}

export default myInfoPage