class LoginPage{
    SelectorList(){
        const Selectors = {
        usernameField: "[name='username']",  
        passwordField: "[name='password']",   
        loginButton: "[type='submit']",  
        userError: "[role='alert']",  
        passWordRequiered: '.oxd-input-group > .oxd-text',
        userNameRequiered: '.oxd-input-group > .oxd-text',
        }
        return Selectors
    }
    


    acessLoginPage(){
        cy.visit( '/auth/login')
    }

    loginwithAnyUser(username, password){
        cy.get(this.SelectorList().usernameField).type(username)
        cy.get(this.SelectorList().passwordField).type(password)
        cy.get(this.SelectorList().loginButton).click()
    }
}

export default LoginPage