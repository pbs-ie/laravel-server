// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

/// <reference types="./" />

import './laravel-commands';
import './commands';
import './laravel-routes';
import './assertions';

before(() => {
    cy.task('activateCypressEnvFile', {}, { log: true });
    cy.artisan('config:clear', {}, { log: false });

    cy.refreshRoutes();

    cy.refreshDatabase();
    Cypress.session.clearAllSavedSessions();
});

after(() => {
    cy.task('activateLocalEnvFile', {}, { log: true });
    cy.artisan('config:clear', {}, { log: false });
});
