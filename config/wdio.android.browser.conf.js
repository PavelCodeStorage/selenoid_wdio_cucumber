const dotenv = require('dotenv')
const { config } = require('./wdio.shared.conf')

dotenv.config()

config.specs = ['./src/features/web/*/*.feature']

config.port = 4723
config.appium = {
  args: {
    address: '127.0.0.1',
    commandTimeout: '7200',
    sessionOverride: true,
    debugLogSpacing: true,
  },
}

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    'appium:Version': '1.13.0',
    'appium:deviceName': 'Pixel XL API 27',
    'appium:platformVersion': '8.1',
    platformName: 'Android',
  },
]

exports.config = config
