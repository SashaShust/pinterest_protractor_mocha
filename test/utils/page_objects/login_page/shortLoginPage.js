const Element = require('../elements/element');
const logger = require('../../../config/logger.config');

class ShortLoginPage {
    constructor() {
        this.fullFormReceiptButton = new Element("Full form receipt button", "//div[@data-test-id='login-switch-account']/div");
    };

    async clickfullFormReceiptButton() {
        await this.fullFormReceiptButton.waitOfElemClickable();
        return this.fullFormReceiptButton.click();
    };
};

module.exports = ShortLoginPage;