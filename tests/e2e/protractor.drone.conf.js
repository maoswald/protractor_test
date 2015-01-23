exports.config = {
    baseUrl: 'http://localhost:3000',

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
