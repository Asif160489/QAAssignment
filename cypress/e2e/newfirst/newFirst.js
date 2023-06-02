import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("Visiting the Login Page", () => {
    cy.visit("https://www.testyou.in/Login.aspx")
})

When("Verify the title of the page", () => {
    cy.title().should('eq', 'TESTYOU LOGIN')
})

Then("Click on Forgot Password", () => {
    cy.get('#ctl00_indexLogin2_hprlnkForgetPassword').click({ force: true });
})