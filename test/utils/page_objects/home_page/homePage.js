const logger = require('../../../config/logger.config');
const BasePage = require("../base_page/basePage");
const Element = require('../elements/element');

class HomePage extends BasePage {
    constructor() {
        super();
        this.url = "https://www.pinterest.com";
        this.userIcon = new Element("User's icon", "//div[contains (text(), 'Kot')]");
        this.userButton = new Element("User's button", "//a[@href='/kot292800/']");
    };

    open() {
        return super.open(this.url);
    };

    async isUserIconPresent() {
        await this.userIcon.waitOfElemPresence();
        return await this.userIcon.isDisplayed();
    };

    async clickUserButton() {
        await this.userButton.waitOfElemClickable();
        return await this.userButton.click();
    };
};

module.exports = HomePage;