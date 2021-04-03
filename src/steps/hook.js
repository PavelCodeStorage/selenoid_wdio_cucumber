import { After } from 'cucumber'

After(async testCase => {
  if (testCase.result.status === 'failed') {
    await browser.takeScreenshot()
  }
})
