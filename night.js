'use strict'

if (!document.getElementById('nightMessenger')) {
  const a    = chrome.extension.getURL('nightmode.css');
  const link = document.createElement('link');

  link.type = 'text/css';
  link.rel  = 'stylesheet';
  link.id   = 'nightMessenger';
  link.href = a;

  document.head.appendChild(link);
  chrome.storage.sync.set({ activated: true });
}
