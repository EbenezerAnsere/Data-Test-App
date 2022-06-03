/ <reference types="cypress" />

describe("Data Test App", ()=>{

    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })

    it("Verify first name field test case", ()=>{
         cy.get('input[name="firstName"]').type('Kwabena')
         .should('have.value', 'Kwabena')
         .should('be.enabled')
         .should('be.visible')
    })

    it("Verify middle name field test case", () =>{
        cy.get('input[name="middleName"]').type('Opoku')
        .should('have.value', 'Opoku')
        .should('be.enabled')
        .should('be.visible')
    })

    it('Verify last name field test case', () =>{
        cy.get('input[name="lastName"]').type('Osei')
        .should('have.value', 'Osei')
        .should('be.enabled')
        .should('be.visible')
    })

    it('Verify phone number field test case', ()=>{
       cy.get('input[name="phoneNumber"]').type('02493422')
    })
    
    it('Verify DOB field test case', () =>{
       cy.get('input[name="dob"]').type('2012-02-12');
    })

    it('Verify address textarea test case', () =>{
       cy.get('textarea').type('I am verifying the software application');
    })

    it('verify Add New User Button', ()=>{
        cy.contains('Add New User').click()
    })
})