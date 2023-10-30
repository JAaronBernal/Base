import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

const loginPage = require("../pages/LoginPage").default;

Given("login {string}", (organization) => {
    loginPage.openWebPage(organization);
});
When("credentials {string} {string}", (user, pwd) => {
    loginPage.login(user, pwd);
});
Then("home page", () => {
    loginPage.home()
});
