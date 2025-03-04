import { select } from 'async';
import userData from '../fixtures/users/userData.json' 
import LoginPage from '../Pages/loginPage.js'
import DashboardPage from '../Pages/DashboardPage.js'
import menuPage from '../Pages/menuPage.js'
import myInfoPage from '../Pages/myInfoPage.js'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPages = new menuPage()
const myInfoPages = new myInfoPage()


describe('orange HRM tests', () => {
  

  it.only('User info update - Success', () => {

    loginPage.acessLoginPage()
    loginPage.loginwithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboard()

    menuPages.acessmyInfo()

    myInfoPages.fieldPersonalDetails('Jorginho', 'Da Coabe')
    myInfoPages.fillEmployedDetails('employeId', 'otherID', 'driverLicense', '2025-03-01')
    myInfoPages.selectcountry()
    myInfoPages.maritalStatus()
    myInfoPages.bloodtype()
    myInfoPages.saveSubmit()
 
    
  })
  

})
