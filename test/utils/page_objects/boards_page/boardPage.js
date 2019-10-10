const logger = require('../../../config/logger.config');
const BasePage = require("../base_page/basePage");
const Element = require('../elements/element');

class BoardPage extends BasePage {
    constructor() {
        super();
        this.addButton = new Element("Add button", "//button[@aria-label='Profile actions overflow']");
        this.createBoardButton = new Element("Create board button", "//div[@title='Create board']/ancestor::div[@role='button']");

        //div[@title='Create board']/ancestor::div[@role='button']
        //this.userIcon = new Element("User's icon", "//div[contains (text(), 'Kot')]");

    };

    async clickAddButton() {
        await this.addButton.waitOfElemClickable();
        return await this.addButton.click();
    };

    async clickCreateBoardButton() {
        await this.createBoardButton.waitOfElemClickable();
        return await this.createBoardButton.click();
    };
};

module.exports = BoardPage;
