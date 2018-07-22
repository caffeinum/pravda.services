import baseConfig from './default'
import config from './_mainnet'


export default {
  env: 'production',
  entry: 'mainnet',

  base: 'https://pravda.services/',
  publicPath: `https://pravda.services${baseConfig.publicPath}`,

  ...config,
}
