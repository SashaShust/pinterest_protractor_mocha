const Element = require('../elements/element');

class OptionsForm {
    constructor() {
        this.logoutButton = new Element("[Log out] button", "//div[@title='Log out']/ancestor::div[@role='button']");
    };

    async clickLogoutButton() {
        await this.logoutButton.waitOfElemClickable();
        return this.logoutButton.click();
        //browser.sleep(3000);
    };
};

module.exports = OptionsForm;