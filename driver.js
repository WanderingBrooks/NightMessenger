'use strict'

// const colorizeSpeechBubbles = function() {
//   console.log('Trying to colorize')

//   console.log('Trying to colorize')
//   var speechBubbleCSS = '._3058._ui9._hh7._6ybn._s1-._52mr._43by._6ybp._3oh-'

//   let els = document.querySelectorAll(speechBubbleCSS)
//   console.log(els)

//   document.querySelectorAll(speechBubbleCSS).forEach((e) => {
//     console.log('inside of loop')
//     console.log(e)
//     var style = getComputedStyle(e)
//     if (style) {
//       // Devare BG IMAGe
//       if (style.backgroundImage != 'none') {
//         style.backgroundImage = 'none'
//         // style.backgroundColor = '#233276 !important'
//       }
//       if (style.backgroundColor != 'none') {
//         var reg = /rgb\((\d*),\s?(\d*),\s?(\d*)\)/g
//         var matches = reg.exec(style.backgroundColor)
//         console.log(matches)
//       }
//     }
//   })
// }

chrome.storage.sync.get('activated', function(obj) {
  var initialToggleState
  // console.log("Initial check.");
  initialToggleState = obj.activated

  if (initialToggleState) {
    // console.log('initialized')
    var a = chrome.extension.getURL('nightmode.css'),
      link = document.createElement('link')

    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.id = 'nightMessenger'
    link.href = a

    // setTimeout(colorizeSpeechBubbles, 1000)
    // document.addEventListener('DOMContentLoaded', colorizeSpeechBubbles)
    // window.addEventListener('DOMContentLoaded', function(){
    //   console.log("LOL")
    // })
    // colorizeSpeechBubbles()

    document.head.appendChild(link)
  }
})
