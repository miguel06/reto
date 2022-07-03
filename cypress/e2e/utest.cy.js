describe("crear nuevo usuario", () => {

    beforeEach(() =>{
        cy.visit("https://www.utest.com/")
    })

    it("Creacion de usuario", () => {

        
        cy.get('.unauthenticated-nav-bar__sign-up').click()
        cy.get('#firstName').type("Miguel")
        cy.get('#lastName').type("Cruz")
        cy.get('#email').type("miguelf.cruz93arias@gmail.com")
        cy.get('#birthMonth').select(6)
        cy.get('#birthDay').select("19")
        cy.get('#birthYear').select(12)
        cy.get('.text-right > .btn').click()
        //   cy.get('#city').type("villavicencio")
        cy.get('#zip').type("500004")
        cy.get('[class="ui-select-match-text pull-left"]').first().click()
        cy.get('.next-step > .btn').click()
        cy.get('#web-device > :nth-child(1) > .ui-select-box > .ui-select-container > .ui-select-match > .btn-default').first().click()
        cy.get('.next-step > .btn').click()
        cy.get('#password').type("Mcruz480901")
        cy.get('#confirmPassword').type("Mcruz480901")
        cy.get(':nth-child(5) > .input-check-box > .checkmark').click()
        cy.get(':nth-child(6) > .input-check-box > .checkmark').click()
        //cy.get('#mobile-device > :nth-child(1) > .ui-select-box > .ui-select-container > .ui-select-match > .btn-default').select(24)
        cy.get('#laddaBtn').click()


    })



})