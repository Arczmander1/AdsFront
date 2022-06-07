// npm i -D customize-cra react-app-rewire-alias
// dodawanie sciezek z zewnatrz do aplikacji - wczesniej trzeba dodac do package.json

// stworzyc tsconfig.paths.json {
//   "compilerOptions": {
//     "baseUrl": ".",
//     "paths": {
//       "types": [
//         "../mega-ads-back/types"
//       ]
//     }
//   }
// }


const {override} = require('customize-cra');
const {aliasDangerous, configPaths} = require('react-app-rewire-alias/lib/aliasDangerous');

module.exports = {
    webpack: override(
        aliasDangerous(configPaths('./tsconfig.paths.json'))
    ),
};
