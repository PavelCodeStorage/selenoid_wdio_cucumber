const dotenv = require('dotenv')
const { config } = require('./wdio.shared.conf')

dotenv.config()
config.specs = ['./src/features/*.feature']

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',

    'selenoid:options': { enableVNC: true },
  },
]
exports.config = config
