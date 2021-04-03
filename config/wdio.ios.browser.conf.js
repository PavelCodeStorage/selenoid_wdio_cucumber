const dotenv = require('dotenv')

const { config } = require('./wdio.shared.conf')

dotenv.config()

config.specs = ['./src/features/*.feature']

config.port = 4723
config.appium = {
  args: {
    address: '127.0.0.1',
    commandTimeout: '300',
    sessionOverride: true,
    debugLogSpacing: true,
  },
}

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'Safari',
    deviceName: 'iPhone 6',
    deviceOrientation: 'portrait',
    platformVersion: '12.4',
    platformName: 'iOS',
  },
]

exports.config = config
