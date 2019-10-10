const Element = require('../elements/element');
const logger = require('../../../config/logger.config');

class LoginPage {
    constructor() {
        this.url = "https://www.pinterest.com";
        this.emailInput = new Element("Email input", "//*[@type='email']");
        this.passwordInput = new Element("Password input", "//*[@id='password']");
        this.submitButton = new Element("Submit button", "//button[@type='submit']");
        this.regisrationButton = new Element("Registration button", "//button[contains(@class, 'RCK')]");
        this.fullFormReceiptButton = new Element("Full form receipt button", "//div[@class='I7 iyn Hsu']//a[contains(@class, 'Wk9')]");
        // this.fullFormReceiptButton = new Element("Full form receipt button", "//*[@data-test-id='login-switch-account']//div[@role='button']");
    };

    open() {
        logger.info(`Opening "${this.url}"`);
        return browser.get(this.url);
    };

    async typeEmail(email) {
        await this.emailInput.waitOfElemPresence();
        return this.emailInput.typeText(email);
    };

    async typePassword(password) {
        await this.passwordInput.waitOfElemPresence();
        return this.passwordInput.typeText(password);
    };

    async clickSubmitButton() {
        await this.submitButton.waitOfElemClickable();
        return this.submitButton.click();
    };

    async isRegistrationButtonPresent() {
        await this.regisrationButton.waitOfElemPresence();
        return await this.regisrationButton.isDisplayed();
    };

    async isPasswordInputAvaliable() {
        await this.passwordInput.waitOfElemPresence();
        return await this.passwordInput.isDisplayed();
    };

    async clickFullFormButton() {
        await this.fullFormReceiptButton.waitOfElemClickable();
        return this.fullFormReceiptButton.click();
    };
};

module.exports = LoginPage;