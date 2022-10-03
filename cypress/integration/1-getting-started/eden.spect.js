/// <reference types="cypress" />


describe('Test de Pagina Eden', () => {
 
  it("Llamada a Servicio", () => {

    cy.request({
      method: "GET",
      url: 'https://edenapi.edenentradas.com.ar/edenventarestapi2/api/contenido/inicio'
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response))
    })
 

  });

  it("Llamada a Servicio con commmands: /inicio", () => {
    cy.callService('inicio','espectaculo');
  });

  it("Llamada a Servicio con commmands: /puntosdeventas", () => {
    cy.callService('puntosdeventas','venta');
  });

});