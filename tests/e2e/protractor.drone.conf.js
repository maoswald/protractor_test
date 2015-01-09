exports.config = {
    chromeDriver: '/usr/local/bin/chromedriver',

    multiCapabilities: [
        {
            'browserName' : 'chrome'
        },
        {
            'browserName' : 'firefox'
        },
        {
            'browserName': 'phantomjs'
        }
    ],

    specs: ['**/*.js']

};
