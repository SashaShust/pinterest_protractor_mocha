const logger = require('../../../config/logger.config');
const BasePage = require("../base_page/basePage");
const Element = require('../elements/element');

class CreatingBoardPage {
    constructor() {
        this.boardNameInput = new Element("Board name input", "//input[@id='boardEditName']");
        this.createButton = new Element("Create Button", "//button[@type='submit']");
    };

    async typeBoardName(name) {
        await this.boardNameInput.waitOfElemPresence();
        return this.boardNameInput.typeText(name);
    };

    async clickCreatetton() {
        await this.createButton.waitOfElemClickable();
        return await this.createButton.click();
    };
};

module.exports = BoardPage;