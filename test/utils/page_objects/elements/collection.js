const logger = require('../../../config/logger.config');

class Collection {
    constructor(elementName, selector, selectorType = 'xpath') {
        switch (selectorType) {
            case "xpath":
                this.element = element(By.xpath(selector));
                break;
            case "css":
                this.element = $(selector);
                break;
        }
        ;
        this.elementNmae = elementName;
    };

    async getCount() {
        const collectionCount = await this.collection.count();
        logger.info(`Count of "${this.elementName}" is "${collectionCount}"`);
        return collectionCount;
    };

    async getTexts() {
        const arrayOfCollectionTexts = await this.collection.getText();
        logger.info(`Texts of "${this.elementName}" are [${arrayOfCollectionTexts}]`);
        return arrayOfCollectionTexts;
    };

    async clickElementByText(textToClick) {
        const arrayOfElementTexts = await this.collection.getText();
        const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
        if (elementToClickIndex === -1) {
            throw new Error(`No element with [${textToClick}] text found!`);
        }
        logger.info(`Clicking "${textToClick}" text in "${this.elementName}"`);
        return this.collection.get(elementToClickIndex).click();
    };
};

module.exports = Collection;