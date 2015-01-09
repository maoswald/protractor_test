exports.config = {
    chromeDriver: '/usr/local/bin/chromedriver',

    //capabilities: {
    //    'browserName': 'chrome'
    //},

    multiCapabilities: [
        {
            'browserName' : 'chrome'
        },
        {
            'browserName' : 'firefox'
        }
    ],

    suites: {
        full: 'tests/e2e/**/*.js'
    }

    //onPrepare: function() {
    //    //set window size, maybe good for responsive sizes
    //    browser.driver.manage().window().setSize(1600, 800);
    //
    //},

    //jasmineNodeOpts: {
    //    showColors: true
    //}
};