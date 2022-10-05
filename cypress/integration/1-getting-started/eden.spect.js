/// <reference types="cypress" />


describe('Test de Pagina Eden', () => {
 
  it("Llamada a Servicio", {tags:'@regression'}, () => {

    cy.request({
      method: "GET",
      url: 'https://edenapi.edenentradas.com.ar/edenventarestapi2/api/contenido/inicio'
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response))
    })
 

  });

  it("Llamada a Servicio con commmands: /inicio", {tags:'@regression'}, () => {
    cy.callService('inicio','espectaculo');
  });

  it("Llamada a Servicio con commmands: /puntosdeventas", {tags:'@regression'}, () => {
    cy.callService('puntosdeventas','venta');
  });

});