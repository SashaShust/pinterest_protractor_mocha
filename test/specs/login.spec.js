const {expect} = require("chai");
const PageFactory = require("../utils/page_objects/pageFactory");
const testData = require('../data/testData.json');

describe("Login with correct login and password", function () {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    });

    afterEach(async function () {
        await PageFactory.getPage("Home").Header.clickSettingsAndOptions();
        await PageFactory.getPage("Options").clickLogoutButton();
        return await PageFactory.getPage("Login").clickfullFormReceiptButton();
    });

    it('should login with correct login and password', async function () {
        await PageFactory.getPage("Login").open();
        await PageFactory.getPage("Login").typeEmail(testData.email);
        await PageFactory.getPage("Login").typePassword(testData.password);
        await PageFactory.getPage("Login").clickSubmitButton();
        const isIconPresent = await PageFactory.getPage("Home").isUserIconPresent();
        expect(isIconPresent).to.be.equal(true);
    });
});