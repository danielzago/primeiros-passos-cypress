import { dir } from "async"
import dashboard from "./DashboardPage"

class menuPage{
    SelectorList(){
        const Selectors = {
    adminButton: "':nth-child(1) > .oxd-main-menu-item > .oxd-text'",
    pimButton: "':nth-child(2) > .oxd-main-menu-item > .oxd-text'",
    leaveButton: "':nth-child(3) > .oxd-main-menu-item > .oxd-text'",
    timeButton: "':nth-child(4) > .oxd-main-menu-item > .oxd-text'",
    recruitButton: "':nth-child(5) > .oxd-main-menu-item > .oxd-text'",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    performanceButton: "':nth-child(7) > .oxd-main-menu-item > .oxd-text'",
    dashboardButton: "':nth-child(8) > .oxd-main-menu-item > .oxd-text'",
    directoryButton: "':nth-child(9) > .oxd-main-menu-item > .oxd-text'",
    maintenanceButton: "':nth-child(10) > .oxd-main-menu-item > .oxd-text'",
    claimButton: "':nth-child(11) > .oxd-main-menu-item > .oxd-text'",
    buzzButton: "':nth-child(12) > .oxd-main-menu-item > .oxd-text'",

    }
    return Selectors
    }
    
    acessAdmin(){
        cy.get(this.SelectorList().adminButton).click()
    }

    acesspim(){
        cy.get(this.SelectorList().pimButton).click()
    }

    acessleave(){
        cy.get(this.SelectorList().leaveButton).click()
    }

    acesstime(){
        cy.get(this.SelectorList().timeButton).click()
    }

    acessrecruit(){
        cy.get(this.SelectorList().recruitButton).click()
    }

    acessmyInfo(){
        cy.get(this.SelectorList().myInfoButton).click()
    }

    acessperformance(){
        cy.get(this.SelectorList().performanceButton).click()
    }

    acessdashboard(){
        cy.get(this.SelectorList().dashboardButton).click()
    }

    acessdirectory(){
        cy.get(this.SelectorList().directoryButton).click()
    }

    acessmaintenance(){
        cy.get(this.SelectorList().maintenanceButton).click()
    }

    acessescalim(){
        cy.get(this.SelectorList().claimButton).click()
    }

    acessbuzz(){
        cy.get(this.SelectorList().buzzButton).click()
    }
    
}

export default menuPage