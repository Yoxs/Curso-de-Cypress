/// <reference types="cypress" />
import headerPage from '../pages/header.js'
import LoginPage from '../pages/Login.js'
import Data from "/cypress/fixtures/users.json"


describe('example to-do app', () => {
  beforeEach(() => {
     cy.visit("https://automationteststore.com")
  });

  it("Header", () => {
  const header = new headerPage()

  header.getLoginRegisterButon().click();

  });

  it("Login Fail", () => {
    const header = new headerPage()
    const login = new LoginPage()

    header.getLoginRegisterButon().click();
    login.getinputuser().click();
    login.getinputuser().type('Yoxsbel');
    login.getinputpass().click();
    login.getinputpass().type('pass1234');
    login. getloginBtn().click();
  
    });

    it("Login OK", () => {
      const header = new headerPage()
      const login = new LoginPage()
  
      header.getLoginRegisterButon().click();
      login.getinputuser().click();
      login.getinputuser().type('agusDarwoft');
      login.getinputpass().click();
      login.getinputpass().type('automation');
      login. getloginBtn().click();
    
      });
      it("Login OK con Data", () => {
        const header = new headerPage()
        const login = new LoginPage()
    
        header.getLoginRegisterButon().click();
        login.getinputuser().click();
        login.getinputuser().type('Data.user');
        login.getinputpass().click();
        login.getinputpass().type('Data.password');
        login. getloginBtn().click();
      
        });   

});