/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle');

module.exports = {
  defaultNetwork: 'mumbai',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/2EIJcZKBu1DZCIzg85R54EZUphy',
      chainId: 80001,
      accounts: [
        'ce865c6b8fb1747c27ffc3ed882f1f68f7544a081556ea83683ebf540ecd4fad',
      ],
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
