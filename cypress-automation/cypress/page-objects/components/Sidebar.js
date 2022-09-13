export default class Sidebar {

    static paymentsSection() {
        cy.get('[data-test="payments/orders-sidebarLink"]').click()
        cy.get('h1').contains('Payments')
    }

    static settlementsSection() {
        cy.get('[data-test="settlements-sidebarLink"]').click()
    }

    static integrationsSection() {
        cy.get('[data-test="integrations/api_keys-sidebarLink"]').click()
    }

    static settingsSection() {
        cy.get('[data-test="settings/personal-sidebarLink"]').click()
    }

    static checkUserLoggedIn() {
        // cy.get('span').contains(`Log Out`)
        cy.get('[aria-label="Sign out icon"]')
    }
}
