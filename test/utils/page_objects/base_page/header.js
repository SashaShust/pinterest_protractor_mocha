const logger = require("../../../config/logger.config");
const Element = require("../elements/element");
const Collection = require("../elements/collection");

class Header {
    constructor() {
        this.navigationButtons = new Collection("Navigation Buttons", "//div[@data-test-id='button-container']/div");
        this.settingsAndOptionsButton = new Element("[Settings And Options] button", "//button[@aria-label='Settings and more options related to your account']");
    };

    async clickSettingsAndOptions() {
        await this.settingsAndOptionsButton.waitOfElemClickable();
        logger.info(`Clicking [Settings And Options] button`);
        return this.settingsAndOptionsButton.click();
    };
};

module.exports = Header;