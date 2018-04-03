# Night Messenger

<img 
    src="https://lh3.googleusercontent.com/Zaq8ot6x9MK2gA6CtX_il9lWkdd2PB6iqc9DWgBqrsuin56onzru9qqd4dl8PdmU8GysjsPu4eI=w640-h400-e365" 
    alt="Night Messenger Screenshot" 
/>

**Night Messenger** is a simple toggle-able Chrome extension that provides a dark theme for Facebook's Messenger.com interface.

We are not affiliated with Facebook.

## Development Setup

Run these following to ensure you're using the same dependencies:

```
nvm use
yarn install
```

## Changing the theme
The `nightmode.scss` file is the SCSS file that controls the theme. A gulp task, `sass:watch` is configured to compile this SCSS file into `nightmode.css`. 

## What is the "nightmessenger/nightmessenger" directory?
The `nightmessenger/nightmessenger` directory is the folder that will be compressed into a `.zip` file, which will be uploaded to the Chrome Web Store. 

Originally, we compressed the entire repository, but that included the `node_modules/` directory, the `.gitignore`, and other files that do NOT need to be included in the Chrome extension. 

## How to release a new version

1. Run `gulp sass` to run the production build. 
2. Delete all the files in `nightmessenger/nightmessenger`. 
3. Copy the following files to `nightmessenger/nightmessenger`: 
    - background.js
    - day.js
    - driver.js
    - manifest.js
    - night.js
    - nightmessenger128.png
    - nightmessenger48.png
    - nightmessenger16.png
    - nightmode.css
    - off.png
    - on.png
4. Compress `nightmessenger/nightmessenger` (which now has the updated files) into a ZIP file.
5. Paste the file into the Chrome Extensions Developer dashboard.


## Misc

[Link to the Chrome Web Store](https://chrome.google.com/webstore/detail/night-messenger/hjhnmilbfdehpgfcojlmmooknnkhgdmh/reviews?hl=en)