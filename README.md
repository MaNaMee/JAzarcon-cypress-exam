# JAzarcon-cypress-exam


The TAPH webapp is a sample learning webapp where i conducted my cypress exam. this website contains a sample registration page where the user can register as a user or as a "Quiz Master" roles . The website also contains a login page, and a basic dashboard for the user and quiz master roles.

# Spec Files
- registration.cy.js
    This spec file tests the registration and login of user and quiz master roles.


# Installation
1. Create a Project Folder
  - Create a project folder in your desktop named "Cypress_Testing" 
2. Clone the Repository
    ```bash
    cd ~/Desktop/Cypress_Testing
    git clone https://github.com/MaNaMee/Training_Cypress_Repo.git
    ```
3. Install Dependencies
   ```bash
    cd Training_Cypress_Repo
    npm install
    ```
4. Install cypress
   ``` bash
   npm install cypress --save-dev
   ```

# Third partty dependencies
- faker.js
 - install faker.js by using this command in the termnila
 - npm install --save-dev @faker-js/faker
   
# Running the Tests
 - Contained in this repo is a cypress spec file (a test code/file) for the login feature of saucedemo.com. This file can be run in headed and in headless mode.

## Headed Mode
 - In headed mode, the preffered browser of the user will open with a visible UI for cypress. This mode can be useful for a visual confirmation of the test actions done by the spec file.

1. type in CMD
   ```bash
    npx cypress open
    ```
2. Once the client for cypress is open, click E2E Testing
3. Choose a preferred browser
4. Once cypress is opened in the preferred browser, click login.cy.js

## Headless mode (NO UI)

1. open package.json and modify the scripts array
``` bash
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "Reg-Test": "npx cypress run  --spec 'cypress/e2e/regression-testing/registration.cy.js' --browser chrome" 
  },
```
2. Save package.json
3. type in cmd
   ``` bash
   npm run login-test
   ```

