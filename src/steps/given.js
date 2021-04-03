import { Given } from 'cucumber'

Given(/^User open web application$/, async () => {
  await browser.url('https://www.tut.by')
})
