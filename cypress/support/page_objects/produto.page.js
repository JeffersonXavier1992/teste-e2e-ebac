import { ne } from "@faker-js/faker"

class ProdutosPage{

  

    buscarProduto (nomeProdutos){
        cy.get('[name="s"] ').eq(1).type(nomeProdutos)
        cy.gt('.button-search').eq(1).click()
    }
    buscarProdutoLista (nomeProdutos) {
        cy.get('.products > .row')
        .contains(nomeProdutos)     
        .click()
    }
    visitarProduto (nomeProdutos) {
       // cy.visit(`produtos/${nomeProdutos}`)
       const urlFormatada = nomeProdutos.replace(/ /g, '-')
       cy.visit(`produtos/${urlFormatada}`)

    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', '4 × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()       
    }       
}
export default new ProdutosPage()

