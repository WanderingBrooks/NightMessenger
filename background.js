'use strict'
let activated;

chrome.storage.sync.get('activated', obj => activated = obj.activated);

const toggleOnOff = function(tab) {
  if (activated) {
    // Change Icon
    chrome.browserAction.setIcon({ path: 'turnOff.png', tabId: tab.id })
    // Apply Script + CSS
    chrome.tabs.executeScript(tab.id, { file: 'night.js' })
  } else {
    // Change Icon
    chrome.browserAction.setIcon({ path: 'turnOn.png', tabId: tab.id })
    // Apply Script + CSS
    chrome.tabs.executeScript(tab.id, { file: 'day.js' })
  }
  activated = !activated;
}

chrome.browserAction.onClicked.addListener(toggleOnOff)
