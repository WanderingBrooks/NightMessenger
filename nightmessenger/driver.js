'use strict'

chrome.storage.sync.get('activated', obj => {
  let activated = obj.activated;

  if (activated) {
    const a    = chrome.extension.getURL('nightmode.css');
    const link = document.createElement('link');

    link.type = 'text/css';
    link.rel  = 'stylesheet';
    link.id   = 'nightMessenger';
    link.href = a;

    document.head.appendChild(link)
  }
})
