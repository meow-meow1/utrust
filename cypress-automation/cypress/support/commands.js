// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('isVisible', selector => {
    cy.get(selector).should('be.visible');
})
Cypress.Commands.add('isHidden', selector => {
    cy.get(selector).should('not.exist');
})

Cypress.Commands.add('logIn', (username, password) => {
    cy.contains('Sign in').should('be.visible');
    cy.get('#email').type(username)
    cy.get('#password').type(password)
    cy.get('#progress-status').click();
})

Cypress.Commands.add('setResolution', size => {
    if (Cypress._.isArray(size)) {
        cy.viewport(size[0], size[1])
    } else {
        cy.viewport(size)
    }
})

// // TODO maybe create one function intstead of two with flag like register=true? but then the function name will be confusing ><
// Cypress.Commands.add('register', (username, password) => {
//     // cy.get('.header__optionLineTwo').click();
//     cy.contains('Sign-in').should('be.visible');
//     cy.get('#email').type(username)
//     cy.get('#password').type(password)
//     cy.get('.login__registerButton').click();
// })

Cypress.Commands.add('logInWithApi', (username, password) => {

})


const {MailSlurp} = require('mailslurp-client');
// set your api key with an environment variable `CYPRESS_API_KEY` or configure using `env` property in config file
// (cypress prefixes environment variables with CYPRESS)
const apiKey = 'e5c7cbd6be09cd3da0884e9d6c07c9894b8bbf36f8774937a99dd4b4f1076b99'
const mailslurp = new MailSlurp({apiKey});

Cypress.Commands.add("createInbox", () => {
    return mailslurp.createInbox();
});

Cypress.Commands.add("waitForLatestEmail", (inboxId) => {
    // how long we should hold connection waiting for an email to arrive
    const timeoutMillis = 30_000;
    return mailslurp.waitForLatestEmail(inboxId, timeoutMillis)
});