/// <reference types="cypress" />
import { fa, faker } from '@faker-js/faker';
import produtoPage from '../support/page_objects/produto.page';
import endereçoPage from '../support/page_objects/endereço.page';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

describe('Exercico modulo 12', () => { 
    
beforeEach(() => {
  cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

});

it('Fazer cadastro', () => {
  cy.preCadastro(faker.internet.email(), 'jefferson123' , faker.person.firstName() , faker.person.lastName ()) 
  cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso') 
  produtoPage.visitarProduto('Aero Daily Fitness Tee')
  produtoPage.addProdutoCarrinho('M', 'Yellow', 4)
  endereçoPage.editarEnderecoFaturamento('Jefferson', 'xavier', 'EBAC', 'Brasil', 'Rua das Magnolias', 15, 'Cotia', 'São Paulo', '06719-470', '4002-8922', 'jefferson.xavier@ebac.com.br')
  cy.get('#terms').click()
  cy.get('#place_order').click()
  cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
  }); 
   
});

})