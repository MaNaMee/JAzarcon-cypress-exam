const { generateUserData, generateQMData } = require("../../support/fakerdata")

describe('Sprint 1 -  Registration for Quiz Master & Regular User ', () => {

    beforeEach(() => {
        cy.visit('https://testautomation-ph-quiz-app.vercel.app/login')
    })

    let UserUsername, password, uemail, QMusername , QMPass, QMEmail
    

    it('Verify user registration works for both Quiz Master and Regular User roles ', () => {
        cy.url().should('include', '/login')
        cy.get('.space-y-8 > :nth-child(1) > .text-3xl').should('be.visible')
        cy.get('.space-y-8 > :nth-child(1) > .text-3xl').should('contain', 'Software Testing Quiz App')
        cy.contains('Sign in to your account').should('be.visible')


        //Register an account
        cy.get('.mt-8 > .text-center > .text-sm').should('be.visible').and('not.be.disabled')
        cy.get('.mt-8 > .text-center > .text-sm').click()

        //create a new user account
        cy.url().should('include', '/register')

        const generatedData = generateUserData()
        cy.generateUserInfoFile(generatedData)

        cy.get('.mt-6').should('be.visible').should('contain', 'Create your account')
        cy.get('.mt-8 > :nth-child(1) > .text-sm').should('be.visible').should('contain', 'Username')
        cy.get('#username').should('be.visible').should('not.be.disabled')
        cy.get('#username').type(generatedData.username)
        cy.get('#username').should('have.value', generatedData.username)
        cy.get('.mt-8 > :nth-child(2) > .text-sm').should('be.visible').should('contain', 'Email')
        cy.get('#email').should('be.visible').should('not.be.disabled')
        cy.get('#email').type(generatedData.email)
        cy.get('#email').should('have.value', generatedData.email)
        cy.get(':nth-child(3) > .text-sm').should('be.visible').should('contain', 'Password')
        cy.get('#password').should('be.visible').should('not.be.disabled')
        cy.get('#password').type(generatedData.password)
        cy.get('#password').should('have.value', generatedData.password)
        cy.get(':nth-child(4) > .text-sm').should('be.visible').should('not.be.disabled')
        cy.get('#confirmPassword').should('be.visible').should('not.be.disabled')
        cy.get('#confirmPassword').type(generatedData.confirmPassword)
        cy.get('#confirmPassword').should('have.value', generatedData.confirmPassword)
        cy.get(':nth-child(5) > .font-medium').should('be.visible').should('contain', 'Role')
        cy.get('#role-user').should('be.visible').should('not.be.disabled')
        cy.get('#role-user').click().should('be.checked')

        cy.get(':nth-child(6) > .w-full').should('be.visible').should('not.be.disabled').should('contain', 'Register')
        cy.get(':nth-child(6) > .w-full').click()


        //create quiz master data
        cy.url().should('include', '/login')
        cy.get('.space-y-8 > :nth-child(1) > .text-3xl').should('be.visible')
        cy.get('.space-y-8 > :nth-child(1) > .text-3xl').should('contain', 'Software Testing Quiz App')
        cy.contains('Sign in to your account').should('be.visible')


        //Register an account
        cy.get('.mt-8 > .text-center > .text-sm').should('be.visible').and('not.be.disabled')
        cy.get('.mt-8 > .text-center > .text-sm').click()

        //generate quiz master account
        const genAdmin = generateQMData()
        cy.GenerateQuizMasterFile(genAdmin)


        cy.get('.mt-6').should('be.visible').should('contain', 'Create your account')
        cy.get('.mt-8 > :nth-child(1) > .text-sm').should('be.visible').should('contain', 'Username')
        cy.get('#username').should('be.visible').should('not.be.disabled')
        cy.get('#username').type(genAdmin.username)
        cy.get('#username').should('have.value', genAdmin.username)
        cy.get('.mt-8 > :nth-child(2) > .text-sm').should('be.visible').should('contain', 'Email')
        cy.get('#email').should('be.visible').should('not.be.disabled')
        cy.get('#email').type(genAdmin.email)
        cy.get('#email').should('have.value', genAdmin.email)
        cy.get(':nth-child(3) > .text-sm').should('be.visible').should('contain', 'Password')
        cy.get('#password').should('be.visible').should('not.be.disabled')
        cy.get('#password').type(genAdmin.password)
        cy.get('#password').should('have.value', genAdmin.password)
        cy.get(':nth-child(4) > .text-sm').should('be.visible').should('not.be.disabled')
        cy.get('#confirmPassword').should('be.visible').should('not.be.disabled')
        cy.get('#confirmPassword').type(genAdmin.confirmPassword)
        cy.get('#confirmPassword').should('have.value', genAdmin.confirmPassword)
        cy.get(':nth-child(5) > .font-medium').should('be.visible').should('contain', 'Role')
        cy.get('#role-quiz-master').should('be.visible').should('not.be.disabled')
        cy.get('#role-quiz-master').click().should('be.checked')

    })

    before(() => {
        cy.readFile('cypress/fixtures/RegisteredUser.json').then((Userdata) => {
            UserUsername = Userdata.username
            password = Userdata.password
            uemail = Userdata.email
       })

       
       cy.readFile('cypress/fixtures/RegisteredQuizMaster.json').then((QMData) => {
        QMusername = QMData.username
        QMPass = QMData.password
        QMEmail = QMData.email
   })

    })
    it('Verify newly created account can successfully log in and access appropriate URL', () => {
        //assert login page
        cy.url().should('include', '/login')
        cy.get('.space-y-8 > :nth-child(1) > .text-3xl').should('be.visible')
        cy.get('.space-y-8 > :nth-child(1) > .text-3xl').should('contain', 'Software Testing Quiz App')
        cy.contains('Sign in to your account').should('be.visible')

        cy.get('.mt-8 > :nth-child(1) > .text-sm').should('be.visible').should('contain', 'Email or Username')
        cy.get('[data-testid="input-username"]').should('be.visible').should('not.be.disabled')
        cy.log(password)
        cy.get('[data-testid="input-username"]').type(UserUsername)
        // cy.get('[data-testid="input-username"]').should('contain', UserUsername)
        cy.get(':nth-child(2) > .font-medium').should('be.visible').should('contain', 'Password')
        cy.get('[data-testid="input-password"]').should('be.visible').should('not.be.disabled')
        cy.get('[data-testid="input-password"]').type(password)
        // cy.get('[data-testid="input-password"]').should('contain', password)
        cy.get('[data-testid="login-button"]').should('be.visible').should('not.be.disabled').and('contain', 'Sign in')
        cy.get('[data-testid="login-button"]').click()

        //assert user dashboard
        cy.url().should('include', '/topics')
        cy.get('.text-xl').should('be.visible').should('contain', 'TAPH Quiz App')
        cy.get('.hidden > .flex > [href="/dashboard"]').should('be.visible').should('contain', 'Dashboard')
        cy.get('[href="/topics"]').should('be.visible').should('not.be.disabled')
        cy.get('.pb-5 > .text-lg').should('contain', 'Available Topics').should('be.visible')
        cy.get('.ml-3 > .text-sm').should('be.visible').should('contain', uemail.toLowerCase())

        cy.contains('Log out').click()

        //login page 
        cy.get('.mt-8 > :nth-child(1) > .text-sm').should('be.visible').should('contain', 'Email or Username')
        cy.get('[data-testid="input-username"]').should('be.visible').should('not.be.disabled')
        cy.get('[data-testid="input-username"]').type('username1234')
        // cy.get('[data-testid="input-username"]').should('contain', QMusername)
        cy.get(':nth-child(2) > .font-medium').should('be.visible').should('contain', 'Password')
        cy.get('[data-testid="input-password"]').should('be.visible').should('not.be.disabled')
        cy.get('[data-testid="input-password"]').type('qwertyuiop')
        // cy.get('[data-testid="input-password"]').should('contain', QMPass)
        cy.get('[data-testid="login-button"]').should('be.visible').should('not.be.disabled').and('contain', 'Sign in')
        cy.get('[data-testid="login-button"]').click()

        //assert qm dashboard
        cy.url().should('include', '/manage-topics')
        cy.get('.text-xl').should('be.visible').should('contain', 'TAPH Quiz App')
        cy.get('.hidden > .flex > [href="/dashboard"]').should('be.visible').should('contain', 'Dashboard')
        cy.get('[href="/manage-topics"]').should('be.visible').should('not.be.disabled').and('contain', 'Manage Topics')
        cy.get('[href="/manage-questions"]').should('be.visible').should('not.be.disabled').and('contain','Manage Questions')
        cy.get('.ml-3 > .text-sm').should('be.visible').should('contain', 'username1234@mail.com')
        cy.get('.text-lg').should('be.visible').and('contain','Manage Topics')
        cy.get('.pb-5 > .bg-indigo-600').should('be.visible').should('not.be.disabled').should('contain','Create New Topic')
        cy.get('.space-x-4 > .text-gray-500').should('be.visible').should('not.be.disabled').and('contain', 'Log out')
        cy.contains('Log out').click()
    })
})
