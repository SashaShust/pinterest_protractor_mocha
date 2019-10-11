const HomePage = require("./home_page/homePage");
const BasePage = require("./base_page/basePage");
const LoginPage = require("./login_page/loginPage");
const OptionsPage = require("./options_form/optionsForm");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "Login":
                return new LoginPage();
            case "Options":
                return new OptionsPage();
            default:
                return new BasePage();
        }
    };
};

module.exports = PageFactory;