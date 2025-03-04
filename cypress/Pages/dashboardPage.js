class dashboard{
    SelectorList(){
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",         
            }
            return selectors
    }

    checkDashboard(){
        cy.location('pathname').should('assert','web/index.php/dashboard/index')
        cy.get(this.SelectorList().dashboardGrid).should('be.visible')
    }
}
 export default dashboard

