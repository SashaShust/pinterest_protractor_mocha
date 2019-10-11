const {expect} = require("chai");
const PageFactory = require("../utils/page_objects/pageFactory");
const testData = require('../data/testData.json');

describe("Board creation in user account", function () {
    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    });

    xit('should create new board', async function () {
        await PageFactory.getPage("Home").open();
        await PageFactory.getPage("Home").clickUserButton();
        
        await PageFactory.getPage("Login").typePassword(testData.password);
        await PageFactory.getPage("Login").clickSubmitButton();

        const isIconPresent = await PageFactory.getPage("Home").isUserIconPresent();
        expect(isIconPresent).to.be.equal(true);
    });
});