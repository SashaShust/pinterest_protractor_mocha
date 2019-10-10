const HomePage = require("./home_page/homePage");
//const OurWorkPage = require("./our_work_page/our_work_page");
const BasePage = require("./base_page/basePage");
const LoginPage = require("./login_page/loginPage");
const OptionsPage = require("./options_form/optionsForm");
const ShortLoginPage = require("./login_page/shortLoginPage");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "Login":
                return new LoginPage();
            case "ShortLogin":
                return new ShortLoginPage();
            case "Options":
                return new OptionsPage();
            default:
                return new BasePage();
        }
    };
};

module.exports = PageFactory;