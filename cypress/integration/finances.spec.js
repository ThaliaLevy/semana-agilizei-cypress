///<reference types="cypress"/> 

context('Dev Finances Agilizei', () => {
    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/#');
    })
    it('Cadastrar entradas', () => {
       
        cy.get('#transaction .button').click();
        cy.get('#description').type('Ganho');
        cy.get('#amount').type(300);
        cy.get('#date').type('2021-03-30');
        cy.get('button').contains('Salvar').click();
        cy.get('.description')
        .contains('Ganho')
        .parent()
        .find("img[onclick*=Transaction]").click()
        ;

        cy.get('#transaction .button').click();
        cy.get('#description').type('Ganho');
        cy.get('#amount').type(300);
        cy.get('#date').type('2021-03-30');
        cy.get('button').contains('Salvar').click();
        cy.get('[onclick*=Transaction]').click();

        cy.get('#transaction .button').click();
        cy.get('#description').type('Gasto');
        cy.get('#amount').type(-20);
        cy.get('#date').type('2021-03-30');
        cy.get('button').contains('Salvar').click();
        cy.get('[onclick^=Transaction]').click();

        cy.get('#transaction .button').click();
        cy.get('#description').type('Mesada');
        cy.get('#amount').type(10000);
        cy.get('#date').type('2021-03-30');
        cy.get('button').contains('Salvar').click();
        cy.get('[onclick$="remove(0)"]').click();

        cy.get('#transaction .button').click();
        cy.get('#description').type('Mercado');
        cy.get('#amount').type(-200);
        cy.get('#date').type('2021-03-30');
        cy.get('button').contains('Salvar').click();
        cy.get('[onclick="Transaction.remove(0)"]').click();

        cy.get('#transaction .button').click();
        cy.get('#description').type('Mesada');
        cy.get('#amount').type(10000);
        cy.get('#date').type('2021-03-30');
        cy.get('button').contains('Salvar').click();
        cy.get("#data-table tbody tr").should('have.length', 1);
    });

    it('Cadastrar saídas', () => {
        cy.get('#transaction .button').click();
        cy.get('#description').type('Mercado');
        cy.get('#amount').type(-300);
        cy.get('#date').type('2021-03-30');
        cy.get('button').contains('Salvar').click();
        cy.get("#data-table tbody tr").should('have.length', 1);
    })

    it('Exclusão de entrada', () => {
        const ganho = 'Mesada'
        const gasto = 'Mercado'

        cy.get('#transaction .button').click();
        cy.get('#description').type(ganho);
        cy.get('#amount').type(1000);
        cy.get('#date').type('2021-03-30');
        cy.get('button').contains('Salvar').click();

        cy.get('#transaction .button').click();
        cy.get('#description').type(gasto);
        cy.get('#amount').type(-300);
        cy.get('#date').type('2021-03-30');
        cy.get('button').contains('Salvar').click();

        cy.get('tbody tr td').contains(ganho)
        // cy.contains(ganho) > poderia ser utilizado para substituir a linha 82
        .parent()
        .find('img')
        .click();

    });

    it('Exclusão de saída', () => {
        const ganho = 'Mesada'
        const gasto = 'Mercado'

        cy.get('#transaction .button').click();
        cy.get('#description').type(ganho);
        cy.get('#amount').type(1000);
        cy.get('#date').type('2021-03-30');
        cy.get('button').contains('Salvar').click();

        cy.get('#transaction .button').click();
        cy.get('#description').type(gasto);
        cy.get('#amount').type(-300);
        cy.get('#date').type('2021-03-30');
        cy.get('button').contains('Salvar').click();

        cy.get('tbody tr td').contains(gasto)
        .siblings()
        .find('img[onclick^=Transaction]').click();
        

    });
});