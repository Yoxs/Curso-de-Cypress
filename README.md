# Curso-de-Cypress
Curso de Cypress
URL de la pagina a testear: baseUrl=https://automationteststore.com/
Mis TC estan en cypress/integration/1-getting-started/login.spec.js
//Para correr los test de regresson modificar en package.json en "scripts": { "test" : "open" por "cypress:run:regression:test": "npx cypress run -e baseUrl=https://automationteststore.com/ -s cypress/integration/1-getting-started/*.spec.js"