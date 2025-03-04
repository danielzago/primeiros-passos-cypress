import { select } from 'async';
import userData from '../fixtures/users/userData.json' 
import LoginPage from '../Pages/loginPage.js'
import DashboardPage from '../Pages/DashboardPage.js'
import menuPage from '../Pages/menuPage.js'
import myInfoPage from '../Pages/myInfoPage.js'
import { fail } from 'assert-plus';


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPages = new menuPage()
const myInfoPages = new myInfoPage()


describe('Login orange HRM tests', () => {
  
  it('check acess invalid', () => {
    loginPage.acessLoginPage()
    loginPage.loginwithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAcessInvalid()
  })
  it('check acess invalid', () => {
    loginPage.acessLoginPage()
    loginPage.loginwithAnyUser(userData.userSucess.username, userData.userSucess.password)
    loginPage.checkAcessInvalid()
  })
})
