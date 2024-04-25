class ProdutosPage{

    visitarUrl(){
        cy.visit('http://lojaebac.ebaconline.art.br')       
    }

    buscarProdutos(nomeProdutos){
        cy.get('[name="s"]').eq(1).type(nomeProdutos)
        cy.get('.button-search').eq(1).click()
    }

    buscarProdutosLista(nomeProdutos){
        cy.get('.product-block ')
        .contains(nomeProdutos)     
        .click()
    }
    visitarProdutos(nomeProdutos){
        //cy.visit(`produtos/${nomeProdutos}`)
        const urlformatada = nomeProdutos.replace(/ /g, '-')    
        cy.visit(`produtos/${urlformatada}`)
    }
    addProdutosCarrinho(tamanho, cor, quantidade    ){
        cy.get('.button-variable-item-' + tamanho).click()
        cy.get('.button-variable-item-' + cor).click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

    }
}

export default new ProdutosPage()