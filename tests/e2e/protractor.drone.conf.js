exports.config = {
    chromeDriver: '/usr/local/bin/chromedriver',

    multiCapabilities: [
        {
            'browserName' : 'chrome'
        },
        {
            'browserName' : 'firefox'
        }
    ],

    specs: ['**/*.js']

};
