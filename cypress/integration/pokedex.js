// import cy from 'cypress'

describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('can visit a pokemons page', () => {
    cy.visit('http://localhost:5000')
    cy.contains('charizard').click()
    cy.contains('Hidden ability')
  })
})
