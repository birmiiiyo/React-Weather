describe('Tests', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080),
      cy.visit('http://localhost:3000/', mockLocation(35.011665, 1135.768326))
  })
  Cypress.on('uncaught:exception', () => {
    return false
  })

  it('Switch hourly/daily', () => {
    cy.get('button').contains('Hourly', { matchCase: false }).click()
    cy.get('button')
      .contains('Hourly', { matchCase: false })
      .should('be.disabled')
    cy.get('button').contains('Daily', { matchCase: false }).click()
    cy.get('button')
      .contains('Daily', { matchCase: false })
      .should('be.disabled')
  })
  it('input focus after click', () => {
    cy.get('#input').click()
    cy.get('#input').should('have.focus')
  })
  it('hourly weather initial', () => {
    cy.get('button').contains('Hourly', { matchCase: false }).click()
    cy.get('#selectTime').should('not.have.text')
  })
  it('hourly weather after request', () => {
    cy.get('#input').click().type('London')
    cy.get('#dropdown > :nth-child(1)').click()
    cy.get('#city').should('have.text', 'London, United Kingdom')
    cy.get('button').contains('Hourly', { matchCase: false }).click()
    cy.get('#selectTime').select('#hour > :nth-child(3)').should('have.text')
  })
  it('daily weather after request', () => {
    cy.get('#input').click().type('Kioto')
    cy.get('#dropdown > :nth-child(1)').click()
    cy.get('#city').should('have.text', 'Kyoto, Japan')
    cy.get('#dailyWeather').should('have.attr', '#day')
    cy.get('#dailyWeather > :nth-child(1)').should('have.text', 'Weather')
  })
  it('daily weather at night/day', () => {
    cy.get('.weather__Button-sc-zb2304-3').should('have.text', 'day')
    cy.get('.weather__Button-sc-zb2304-3').click()
    cy.get('.weather__Button-sc-zb2304-3').should('have.text', 'night')
    cy.get('.weather__Button-sc-zb2304-3').click()
    cy.get('#day > :nth-child(1) > :nth-child(2)').should('have.text', 'day')
    cy.get('.weather__Button-sc-zb2304-3').click()
    cy.get('#day > :nth-child(1) > :nth-child(2)').should('have.text', 'night')
  })
})

function mockLocation(latitude: number, longitude: number) {
  return {
    onBeforeLoad(win) {
      cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake(
        (cb, err) => {
          if (latitude && longitude) {
            return cb({ coords: { latitude, longitude } })
          }

          throw err({ code: 1 })
        }
      )
    },
  }
}
