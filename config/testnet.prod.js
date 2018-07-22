import baseConfig from './default'
import config from './_testnet'


export default {
  env: 'production',
  entry: 'testnet',

  base: 'https://pravda.services/',
  publicPath: `https://pravda.services${baseConfig.publicPath}`,

  ...config,
}
