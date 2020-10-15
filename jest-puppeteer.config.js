module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
    devtools: false,
    defaultViewport: null
    // defaultViewport: {
    //   width: 1024,
    //   height: 768,
    //   deviceScaleFactor: 1,
    //   isMobile: false,
    //   hasTouch: false,
    //   isLandscape: false
    // }
  },
  browser: 'chromium',
};
