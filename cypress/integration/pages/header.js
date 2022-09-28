class headerLocators{ 
    constructor() {
        this.loginRegisterBtn = 'ul[id="customer_menu_top"] a' 
    }
}

export default class Header{
    constructor(){
        this.locators = new headerLocators();
    }

    getLoginRegisterButon(){
        return cy.get(this.locators.loginRegisterBtn)
    }
}
