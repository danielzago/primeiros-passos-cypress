import userData from '../fixtures/users/userData.json' 
import LoginPage from '../Pages/loginPage.js'
import DashboardPage from '../Pages/DashboardPage.js'
import menuPage from '../Pages/menuPage.js'
import myInfoPage from '../Pages/myInfoPage.js'


const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPages = new menuPage()
const myInfoPages = new myInfoPage()


describe('orange HRM tests', () => {
  

  it('User info update - Success', () => {

    loginPage.acessLoginPage()
    loginPage.loginwithAnyUser(userData.userSucess.username, userData.userSucess.password)
    

    dashboardPage.checkDashboard()

    menuPages.acessmyInfo()

    myInfoPages.fieldPersonalDetails(chance.first(), chance.last())
    myInfoPages.fillEmployedDetails(chance.natural({min: 10000, max: 90000}), chance.natural({min: 10000, max: 90000, exclude:[1, 6]}), chance.natural({min: 10000, max: 90000, exclude:[0, 4]}), '2025-03-01')
    myInfoPages.selectcountry()
    myInfoPages.maritalStatus()
    myInfoPages.bloodtype()
    myInfoPages.saveSubmit()

  })
  
})
