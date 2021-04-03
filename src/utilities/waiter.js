class Waiter {
  static waitForExist(element) {
    return browser.waitUntil(
      () => {
        return element.waitForExist(30000)
      },
      10000,
      `Element: ${element} is not Exist`,
    )
  }

  static waitForEnabled(element) {
    return browser.waitUntil(
      () => {
        return element.waitForEnabled(30000)
      },
      10000,
      `Element: ${element} is not Enabled`,
    )
  }

  static waitForNotEnabled(element) {
    return browser.waitUntil(
      () => {
        return !element.waitForEnabled(30000)
      },
      10000,
      `Element: ${element} is not Enabled`,
    )
  }

  static waitForDisplayed(element, ms = 10000) {
    return browser.waitUntil(
      () => element.waitForDisplayed(30000),
      ms,
      `Element: ${element} is not Displayed`,
    )
  }

  static waitForNotDisplayed(element, ms = 10000) {
    return browser.waitUntil(
      () => {
        return !element.waitForDisplayed(15000)
      },
      ms,
      `Element: ${JSON.stringify(element)} is Displayed`,
    )
  }

  static waitForClickable(element, ms = 10000) {
    return browser.waitUntil(
      () => element.waitForClickable(30000),
      ms,
      `Element: ${element} is not Clickable`,
    )
  }

  static sleep(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time || 1000)
    })
  }
}
export default Waiter
