class LoginLocators{ 
    constructor(){
        this.inputuser = '#loginFrm_loginname'; 
        this.inputpass = '#loginFrm_password'; 
        this.loginBtn = 'button[title="Login"]'  
    }
}

export default class Login{
    constructor(){
        this.locators = new LoginLocators();
    }

    getinputuser(){
        return cy.get(this.locators.inputuser)
    }

    getinputpass(){
        return cy.get(this.locators.inputpass)
    }

    getloginBtn(){
        return cy.get(this.locators.loginBtn)
    }
}

