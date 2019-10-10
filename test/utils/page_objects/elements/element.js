const logger = require('../../../config/logger.config');

class Element {
    constructor(elementName, xpath) {
        this.element = element(by.xpath(xpath));
        this.elementName = elementName;
    }

    click() {
        logger.info(`Clicking "${this.elementName}"`);
        return this.element.click();
    };

    async getText() {
        const elementText = await this.element.getText();
        logger.info(`"${this.elementName}" element text is ${elementText}`);
        return elementText;
    };

    async typeText(text) {
        logger.info(`Typing "${text}" in ${this.elementName}`);
        return await this.element.sendKeys(text);
    };

    async isDisplayed() {
        logger.info(`"${this.elementName}" text is displayed`);
        return await this.element.isDisplayed();
    };

    async waitOfElemPresence() {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.presenceOf(this.element), 7000);
    };

    async waitOfElemClickable() {
        let EC = protractor.ExpectedConditions;
        await browser.wait(EC.elementToBeClickable(this.element), 8000);
    };
};

module.exports = Element;