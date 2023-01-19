const sizes = [
  'iphone-6',
  'ipad-2',
  'iphone-5',
  'iphone-se2',
  'iphone-xr',
  'macbook-11',
  'macbook-13',
  'samsung-s10',
  [1920, 1080],
  [1366, 768],
  [1536, 864],
  [1024, 768],
]

describe('Tests for diff gadgets', () => {
  context('tests at diff sizes', () => {
    sizes.forEach((size: Cypress.ViewportPreset) => {
      beforeEach(() => {
        if (Cypress._.isArray(size)) {
          cy.viewport(size[0], size[1])
        } else {
          cy.viewport(size)
        }
        cy.visit('http://localhost:3000/', mockLocation(35.011665, 1135.768326))
      })
      Cypress.on('uncaught:exception', () => {
        return false
      })
      it(`Switch hourly/daily at ${size}`, () => {
        cy.get('button').contains('Hourly', { matchCase: false }).click()
        cy.get('button')
          .contains('Hourly', { matchCase: false })
          .should('be.disabled')
        cy.get('button').contains('Daily', { matchCase: false }).click()
        cy.get('button')
          .contains('Daily', { matchCase: false })
          .should('be.disabled')
      })
      it(`input focus after click at ${size}`, () => {
        cy.get('#input').click()
        cy.get('#input').should('have.focus')
      })
      it(`hourly weather at ${size}`, () => {
        cy.get('button').contains('Hourly', { matchCase: false }).click()
        cy.get('#selectTime').should('not.have.text')
      })
      it(`hourly weather after request at ${size}`, () => {
        cy.get('#input').click().type('London')
        cy.get('#dropdown > :nth-child(1)').click()
        cy.get('#city').should('have.text', 'London, United Kingdom')
        cy.get('button').contains('Hourly', { matchCase: false }).click()
        cy.get('#selectTime')
          .select('#hour > :nth-child(3)')
          .should('have.text')
      })
      it(`daily weather after request at ${size}`, () => {
        cy.get('#input').click().type('Kioto')
        cy.get('#dropdown > :nth-child(1)').click()
        cy.get('#city').should('have.text', 'Kyoto, Japan')
        cy.get('#dailyWeather').should('have.attr', '#day')
        cy.get('#dailyWeather > :nth-child(1)').should('have.text', 'Weather')
      })
      it(`time after request at ${size}`, () => {
        cy.get('#input').click().type('Kioto')
        cy.get('#dropdown > :nth-child(1)').click()
        cy.get('#city').should('have.text', 'Kyoto, Japan')
      })
      it(`daily weather at night/day at ${size}`, () => {
        cy.get('.weather__Button-sc-zb2304-3').should('have.text', 'day')
        cy.get('.weather__Button-sc-zb2304-3').click()
        cy.get('.weather__Button-sc-zb2304-3').should('have.text', 'night')
        cy.get('.weather__Button-sc-zb2304-3').click()
        cy.get('#day > :nth-child(1) > :nth-child(2)').should(
          'have.text',
          'day'
        )
        cy.get('.weather__Button-sc-zb2304-3').click()
        cy.get('#day > :nth-child(1) > :nth-child(2)').should(
          'have.text',
          'night'
        )
      })
    })
  })
})
describe('LocalStorage Tests', () => {
  it('detect location and fetch weather', () => {
    cy.clearLocalStorage(/persist*/).then(ls => {
      expect(ls.getItem('persist:calendar')).to.be.null
      expect(ls.getItem('persist:location')).to.be.null
      expect(ls.getItem('persist:hourlyWeather')).to.be.null
    })
    expect(localStorage.getItem('persist:calendar')).to.be
    expect(localStorage.getItem('persist:location')).to.be
    expect(localStorage.getItem('persist:hourlyWeather')).to.be
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
