/// <reference types="cypress" />

import protudosPage from "../support/page_objects/protudos.page";

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      protudosPage.visitUrl();
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
     cy.fixture('produtos').then((dados) => {
    protudosPage.buscarProduto(dados[1].nomeProduto)
    protudosPage.addProdutoCarrinho(
        dados[1].tamanho,
        dados[1].cor,
        dados[1].quantidade
    )
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()
    cy.get('.showlogin').click()
    
    cy.fixture("perfil").then((dados) => {
    cy.get('#username').type(dados.usuario)
    cy.get('#password').type(dados.senha)
    cy.get('.woocommerce-button').click()
      
    });
    cy.get('#payment_method_cod').click()
    cy.get('#terms').click()
    cy.get('#place_order').click()
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
  });


  });
});