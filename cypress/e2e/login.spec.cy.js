import { select } from 'async';
import userData from '../fixtures/users/userData.json' 
import LoginPage from '../Pages/loginPage.js'
import DashboardPage from '../Pages/DashboardPage.js'



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()



describe('Login orange HRM tests', () => {
  
  it('check acess invalid', () => {
    loginPage.acessLoginPage()
    loginPage.loginwithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
  })
  it('check acess valid', () => {
    loginPage.acessLoginPage()
    loginPage.loginwithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboard()
  })
})
