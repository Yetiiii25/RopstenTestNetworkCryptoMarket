require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: ['57e267b111d2ca1a0b214047bcc440154a344fcf7e8c1cb162f47bbc0ef48239'],
    },
  },
}