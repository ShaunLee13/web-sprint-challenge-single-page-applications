/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Inputs functioning', () => {
    it('Can Navigate to Page', () => {
        cy.visit('http://localhost:3000/')
    })

    it('Can open order form', () => {
        cy.get('a.orderBtn')
        .click()
    })

    it('Verifies the Order button is disabled', () => {
        cy.get('button.orderBtn')
        .should('be.disabled')
    })

    it('Can input a name', () => {
        cy.get('input[name=name]')
        .type('Bruce Wayne')
        .should('have.value', 'Bruce Wayne')
    })

    it('Verifies the Order button is still disabled', () => {
        cy.get('button.orderBtn')
        .should('be.disabled')
    })

    it('Can select a size', () => {
        cy.get('select[name=size]')
        .select('Small')
    })

    it('Verifies an order can be placed', () => {
        cy.get('button.orderBtn')
        .should('be.enabled')
    })

    it('Can select toppings', () => {
        cy.get('input[name=mushrooms]')
        .click()
        cy.get('input[name=pepperoni]')
        .click()
    })

    it('Can submit an order', () => {
        cy.get('button.orderBtn')
        .click()
        cy.get('input[name=name]').should('have.value', '')
    })
})