/// <reference types="cypress" />
import { fa, faker } from '@faker-js/faker';



context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

describe('Exercico modulo 12', () => {
    
beforeEach(() => {
  cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});

  it('Acessar conta e adicionar produdos no carrinho', () => {    
    var nome = faker.person.firstName()
    var email = faker.internet.email(nome)    
    var sobrenome = faker.person.lastName()

    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type('jefferson123')
    cy.get(':nth-child(4) > .button').click()  
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()

    cy.get('#primary-menu > .menu-item-629 > a').click()             
    cy.get('.products > .row')
    cy.contains('Aero Daily Fitness Tee').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Brown').click()
    cy.get('.input-text').clear().type(3)
    cy.get('.single_add_to_cart_button').click()

    cy.get('#primary-menu > .menu-item-629 > a').click() 
    cy.get('.products > .row')
    cy.contains('Ajax Full-Zip Sweatshirt').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(4)
    cy.get('.single_add_to_cart_button').click()

    cy.get('#primary-menu > .menu-item-629 > a').click() 
    cy.get('.products > .row')
    cy.contains('Ariel Roll Sleeve Sweatshirt').click()
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Red').click()
    cy.get('.input-text').clear().type(1)
    cy.get('.single_add_to_cart_button').click()
    
    cy.get('#primary-menu > .menu-item-629 > a').click() 
    cy.get('.products > .row')
    cy.contains('Atlas Fitness Tank').click()
    cy.get('.button-variable-item-S').click()
    cy.get('.button-variable-item-Blue').click()
    cy.get('.input-text').clear().type(2)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message > .button').click()  
    cy.get('.checkout-button').click()    

      cy.get('#billing_company').type('EBAC')      
      cy.get('#billing_address_1').type('Av Paulista')
      cy.get('#billing_address_2').type('casa 15')      
      cy.get('#billing_city').type('São Paulo')    
      cy.get('#billing_postcode').type('06361-400')
      cy.get('#billing_phone').type('4002-8922')
      cy.get('#terms').click()
      cy.get('#place_order').click()

  })
   
});
})