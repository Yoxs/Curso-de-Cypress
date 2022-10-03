class accountLocators{ 
    constructor() {
        this.manageaddressBtn = 'li a[data-original-title="Manage Address Book"]' 
    }
}

export default class account{
    constructor(){
        this.locators = new accountLocators();
    }

    getmanageaddressButon(){
        return cy.get(this.locators.manageaddressBtn)
    }
}
