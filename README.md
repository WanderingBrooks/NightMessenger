# Does not work anymore as of December 2020 :(


# Night Messenger

**Night Messenger** is a simple toggle-able Chrome extension that provides a dark theme for Facebook's Messenger.com interface.

We are not affiliated with Facebook.

## Development Setup

```shell
# Should be node 6.10.0
nvm use
npm install

# To compile
npm run build

# To use
Load the `nightmessenger` extension as a unpacked extension in chrome
```

## What is the "nightmessenger/nightmessenger" directory?
The `nightmessenger/nightmessenger` directory is the folder that will be compressed into a `.zip` file, which will be uploaded to the Chrome Web Store. 

Originally, we compressed the entire repository, but that included the `node_modules/` directory, the `.gitignore`, and other files that do NOT need to be included in the Chrome extension. 
