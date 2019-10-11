const {expect} = require("chai");
const PageFactory = require("../utils/page_objects/pageFactory");
const testData = require('../data/testData.json');

describe("User account log out", function () {

    beforeEach( async function () {
        await  browser.waitForAngularEnabled(false);
        await  browser.manage().window().maximize();
        await PageFactory.getPage("Login").open();
        await PageFactory.getPage("Login").clickfullFormReceiptButton();
        await PageFactory.getPage("Login").typeEmail(testData.emailForLogout);
        await PageFactory.getPage("Login").typePassword(testData.passwordForLogout);
        return await PageFactory.getPage("Login").clickSubmitButton();
    });

    it('should log out', async function () {
        await PageFactory.getPage("Home").Header.clickSettingsAndOptions();
        await PageFactory.getPage("Options").clickLogoutButton();
        const isRegisrationButtonPresent = await PageFactory.getPage("Login").isRegistrationButtonPresent();
        expect(isRegisrationButtonPresent).to.be.equal(true);
    });
});